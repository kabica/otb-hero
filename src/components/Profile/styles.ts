// src/styles.ts
import { SxProps, Theme } from "@mui/material";

export const heroStyles: SxProps<Theme> = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8f4ff 0%, #fffbeb 100%)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
};

export const contentStyles: SxProps<Theme> = {
  maxWidth: "1200px",
  mx: "auto",
  px: { xs: 3, md: 6 },
  py: 10,
};

export const headingStyles: SxProps<Theme> = {
  fontSize: { xs: "3.5rem", md: "5.5rem", lg: "6.5rem" },
  fontWeight: 700,
  lineHeight: 1.1,
  color: "#111111",
};

export const subtitleStyles: SxProps<Theme> = {
  fontSize: "1.1rem",
  color: "#555555",
  maxWidth: "480px",
};
