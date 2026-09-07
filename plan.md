# Role & Objective
You are an expert Frontend Developer and UI/UX Designer specializing in premium, high-converting B2B web applications.
Your task is to build a B2B landing page and dashboard interface using the core intellectual design language of Apple's web UI. The resulting web app must feel premium, highly legible, fluid, and strictly maintain Apple's minimalist aesthetic while serving B2B functionalities (data visualization, enterprise features, lead generation).

# Core Design System (Apple's Intellectual Design DNA)

## 1. Typography (The Foundation)
- **Font Family:** Use a native system font stack prioritizing `San Francisco` (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `Helvetica`, `Arial`, `sans-serif`).
- **Hierarchy:** 
  - Hero Headlines: Massive, tightly tracked (reduced letter-spacing), heavy font-weight (e.g., 64px to 80px, font-weight 700 or 800).
  - Sub-headlines: Medium size, lighter weight, subtle gray color (`#86868b`).
  - Body Text: Highly readable, 17px to 21px, font-weight 400, line-height 1.5.

## 2. Color Palette & Contrast
- **Backgrounds:** Primarily stark white (`#ffffff`) or pure dark (`#000000`) for specific sections to create dramatic contrast. Occasional use of very soft off-white (`#f5f5f7`).
- **Text:** Dark gray almost black (`#1d1d1f`) for light mode headers.
- **Accents (CTAs):** Apple Blue (`#0066cc`) for primary buttons and text links.
- **Borders:** Extremely subtle, low-opacity grays (e.g., `rgba(0,0,0,0.1)`).

## 3. Spacing & Negative Space (Crucial)
- Implement extreme vertical and horizontal padding between sections (e.g., `py-24` or `py-32` in Tailwind).
- Never cramp elements. Let the UI "breathe". 
- Use CSS Grid/Flexbox with large gaps (`gap-8`, `gap-16`).

## 4. Components & Shapes
- **Buttons:** Fully rounded (pill shape) or with precise border-radius (e.g., `8px` to `12px` or full rounded `9999px`).
- **Cards/B2B Data Containers:** Soft shadows (large blur, low opacity) with clean white backgrounds and a delicate 1px subtle border.
- **Navbar:** Sticky at the top, highly minimalist, utilizing a "Glassmorphism" effect (CSS `backdrop-filter: blur(20px)` and semi-transparent background like `rgba(255, 255, 255, 0.7)`).

## 5. Interactions & Animations
- **Scroll Effects:** Elements should subtly fade in and translate slightly upward as they enter the viewport.
- **Hover States:** Buttons should scale down infinitesimally (e.g., `transform: scale(0.98)`) or gently change background opacity. Avoid aggressive, flashy hover effects.

# Technical Requirements & Constraints
- **Stack:** [Ganti dengan stack pilihanmu, misal: React / Next.js / Vanilla JS] + [Tailwind CSS / CSS Modules].
- **Responsiveness:** Must be perfectly responsive. Mobile views should stack cleanly with adjusted typography sizing.
- **Assets:** Use minimal, high-quality placeholder SVGs or abstract geometric shapes in place of physical product imagery, maintaining a corporate B2B feel but with premium polish.

# Deliverables
1. **Hero Section:** Massive headline, a brief sub-headline, and two primary CTAs ("Get a Demo", "Learn More").
2. **Feature Grid (B2B specific):** 3-4 cards highlighting enterprise features, using large whitespace and Apple-style iconography.
3. **Data/Dashboard Preview Section:** A clean, blurred-glass floating container showing a mock enterprise data chart or metric.
4. **Sticky Glassmorphism Navbar:** With logo left, links center, and login CTA right.

# Execution Rule
Write clean, semantic, and modular code. Do NOT add unnecessary visual clutter, borders, or colors that violate the minimalist guidelines above. The final result must look like an enterprise software solution designed by Apple in Cupertino.