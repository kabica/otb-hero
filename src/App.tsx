import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import { lightTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
      <Profile />

      {/* Add more sections later */}
      {/* <Experience id="experience" /> */}
      {/* <Projects id="projects" /> etc. */}
    </ThemeProvider>
  );
}

export default App;
