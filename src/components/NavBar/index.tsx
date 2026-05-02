import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

const navItems = [
  { label: "01/ ", val: "HOME", href: "#home" },
  { label: "02/ ", val: "EXPERIENCE", href: "#home" },
  { label: "03/ ", val: "PROJECTS", href: "#home" },
  { label: "04/ ", val: "CONTACT", href: "#home" },
];

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 6,
          py: 3,
          opacity: 0.8,
        }}
      >
        <Typography variant="h5" sx={{}} color="secondary">
          DEV : ALEX BICA
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} underline="none">
              <Box
                sx={{
                  display: "flex",
                  //   flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700 }}
                  color="secondary"
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700 }}
                  color="text.secondary"
                >
                  {item.val}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
