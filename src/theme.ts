// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Extend palette for custom accent color (TypeScript support)
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111111" },
    accent: {
      main: "#ff7b00ff", // Nice blue accent (you can change this)
    },
    background: {
      default: "#f8f9fa", // Light off-white
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
      color: "#666666", // Softer gray for "DEVELOPER"
    },

    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      // letterSpacing: "0.06em",
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
