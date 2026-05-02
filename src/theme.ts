// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Extend Palette (you already had this)
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }

  // ← ADD THIS: Extend Typography
  interface TypographyVariants {
    creative: React.CSSProperties;
    developer: React.CSSProperties;
  }

  // Also needed for the options
  interface TypographyVariantsOptions {
    creative?: React.CSSProperties;
    developer?: React.CSSProperties;
  }
}

// This is required for TypeScript to recognize the new variants
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    creative: true;
    developer: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111111" },
    accent: {
      main: "#ff7b00ff",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },

  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',

    creative: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: "7rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.06em",
      color: "#111111",
    },

    developer: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: "7rem",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.06em",
      color: "#666666",
    },

    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        },
      },
    },
  },
});