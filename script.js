const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

const memberSlider = document.getElementById("memberSlider");
const memberTrack = memberSlider?.querySelector(".continuous-scroll-track");
if (memberSlider && memberTrack) {
  memberTrack.append(
    ...Array.from(memberTrack.children).map((m) => m.cloneNode(true))
  );
  memberSlider.addEventListener("pointerdown", () => {
    memberTrack.style.animationPlayState = "paused";
  });
  memberSlider.addEventListener("pointerup", () => {
    memberTrack.style.animationPlayState = "running";
  });
}

const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
const barTop = document.getElementById("barTop");
const barMid = document.getElementById("barMid");
const barBot = document.getElementById("barBot");

let navOpen = false;

function setNavOpen(isOpen) {
  navOpen = isOpen;
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  primaryNav.classList.toggle("is-open", isOpen);

  barTop.style.transform = isOpen
    ? "translateY(6.5px) rotate(45deg)"
    : "none";
  barMid.style.opacity = isOpen ? "0" : "1";
  barBot.style.transform = isOpen
    ? "translateY(-6.5px) rotate(-45deg)"
    : "none";

  document.body.style.overflow = isOpen ? "hidden" : "";
}

if (navToggle) {
  navToggle.addEventListener("click", () => setNavOpen(!navOpen));
}
if (primaryNav) {
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 835 && navOpen) {
    setNavOpen(false);
  }
});

const navbar = document.getElementById("siteNav");
if (navbar) {
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        navbar.style.background = "rgba(255, 255, 255, 0.88)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.72)";
      }
      lastScroll = scrollY;
    },
    { passive: true }
  );
}

const heroArt = document.querySelector(".hero-art");
if (heroArt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const parallaxLayers = [
    [heroArt.querySelector(".writer-scene"), 1],
    [heroArt.querySelector(".language-core"), 0.45],
    [heroArt.querySelector(".sound-wave"), 0.25],
    ...Array.from(heroArt.querySelectorAll(".language-token")).map((l) => [
      l,
      0.75,
    ]),
  ];
  const resetParallax = () => {
    parallaxLayers.forEach(([layer]) => {
      if (layer) {
        layer.style.setProperty("--parallax-x", "0px");
        layer.style.setProperty("--parallax-y", "0px");
      }
    });
  };
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    parallaxLayers.forEach(([layer, depth]) => {
      if (layer) {
        layer.style.setProperty("--parallax-x", `${x * depth * 18}px`);
        layer.style.setProperty("--parallax-y", `${y * depth * 18}px`);
      }
    });
  });
  heroArt.addEventListener("pointerleave", resetParallax);
}

const chartEl = document.getElementById("dashboardChart");
if (chartEl) {
  const chartBars = chartEl.querySelectorAll(".chart-bar");
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          chartBars.forEach((bar, i) => {
            const target = bar.style.height;
            bar.style.height = "4px";
            setTimeout(() => {
              bar.style.height = target;
            }, 120 + i * 60);
          });
          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  chartObserver.observe(chartEl);
}

const customerServiceAnswers = [
  {
    topic: "business",
    answer:
      "Our Business English program covers emails, meetings, presentations, and international collaboration.",
  },
  {
    topic: "ielts",
    answer:
      "IELTS Preparation combines exam strategies, realistic practice, and focused feedback for every skill.",
  },
  {
    topic: "speaking",
    answer:
      "Speaking Lab is designed for pronunciation, fluency, and expressing ideas with confidence.",
  },
  {
    topic: "academic",
    answer:
      "Academic English builds the reading, writing, listening, and discussion skills needed for global study.",
  },
  {
    topic: "schedule",
    answer:
      "We offer flexible short courses and custom cohorts. Contact us to discuss a schedule that fits your needs.",
  },
];

const customerServiceToggle = document.getElementById(
  "customerServiceToggle"
);
const customerServicePanel = document.getElementById("customerServicePanel");
const customerServiceClose = document.getElementById("customerServiceClose");
const customerServiceMessages = document.getElementById(
  "customerServiceMessages"
);
const customerQuestions = document.querySelectorAll(".customer-question");

if (customerServiceToggle && customerServicePanel && customerServiceClose) {
  const setCustomerServiceOpen = (isOpen) => {
    customerServiceToggle.setAttribute("aria-expanded", String(isOpen));
    customerServicePanel.setAttribute("aria-hidden", String(!isOpen));
    customerServicePanel.classList.toggle("is-open", isOpen);
  };

  const addCustomerMessage = (message, type) => {
    const el = document.createElement("div");
    el.className = `customer-message customer-message-${type}`;
    el.textContent = message;
    customerServiceMessages.appendChild(el);
    customerServiceMessages.scrollTop = customerServiceMessages.scrollHeight;
  };

  customerServiceToggle.addEventListener("click", () => {
    setCustomerServiceOpen(
      !customerServicePanel.classList.contains("is-open")
    );
  });
  customerServiceClose.addEventListener("click", () =>
    setCustomerServiceOpen(false)
  );

  customerQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const question = btn.textContent.trim();
      const topic = btn.dataset.topic;
      const match = customerServiceAnswers.find((a) => a.topic === topic);
      addCustomerMessage(question, "user");
      customerQuestions.forEach((b) => (b.disabled = true));
      setTimeout(() => {
        addCustomerMessage(
          match?.answer || "Please contact our team for more information.",
          "bot"
        );
        customerQuestions.forEach((b) => (b.disabled = false));
      }, 400);
    });
  });
}
