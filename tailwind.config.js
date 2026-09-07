tailwind.config = {
  theme: {
    extend: {
      colors: {
        "apple-blue": "#0066cc",
        "apple-blue-hover": "#0055b3",
        "apple-black": "#1d1d1f",
        "apple-gray": "#86868b",
        "apple-gray-light": "#d2d2d7",
        "apple-bg": "#f5f5f7",
        "apple-white": "#ffffff",
        "apple-dark": "#000000",
        navy: "#0b2036",
        "navy-2": "#12293f",
        blue: "#0066cc",
        "blue-dark": "#0055b3",
        paper: "#f5f5f7",
        ink: "#1d1d1f",
        muted: "#86868b",
        "muted-2": "#6e6e73",
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.06)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.06)",
        lift: "0 20px 48px rgba(0, 0, 0, 0.12)",
        glow: "0 4px 24px rgba(0, 102, 204, 0.2)",
        glass:
          "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(255, 255, 255, 0.15)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        fadeInUp:
          "fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        floatSlow: "floatSlow 8s ease-in-out infinite",
      },
    },
  },
};
