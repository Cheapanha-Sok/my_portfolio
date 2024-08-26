import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#0d47a1' : '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
      background: {
        default: isDarkMode ? '#0a1929' : '#ffffff',
        paper: isDarkMode ? '#102027' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#e0e0e0' : '#000000',
      },
    },
  });

  const toggleDarkTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <Navbar toggleDarkTheme={toggleDarkTheme} isDarkMode={isDarkMode} />
      <main className="max-w-7xl mx-auto min-h-screen space-y-10 p-5 md:p-0">
        <HeroSection />
        <AboutMe />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
