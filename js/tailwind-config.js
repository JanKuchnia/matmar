tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1d4ed8",
        "primary-container": "#1e40af",
        "surface": "#f8fafc",
        "surface-dim": "#cbd5e1",
        "surface-variant": "#e2e8f0",
        "outline": "#64748b",
        "on-surface": "#0f172a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "space-xl": "2.5rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem"
      },
      fontFamily: {
        "display-lg": ["Chivo", "sans-serif"],
        "headline-lg": ["Chivo", "sans-serif"],
        "headline-md": ["Chivo", "sans-serif"],
        "headline-sm": ["Chivo", "sans-serif"],
        "body-lg": ["IBM Plex Sans", "sans-serif"],
        "body-md": ["IBM Plex Sans", "sans-serif"],
        "body-sm": ["IBM Plex Sans", "sans-serif"],
        "label-lg": ["IBM Plex Sans", "sans-serif"],
        "label-md": ["IBM Plex Sans", "sans-serif"],
        "label-sm": ["IBM Plex Sans", "sans-serif"]
      }
    }
  }
};
