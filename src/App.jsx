import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import  HeroSection  from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen space-y-10 p-5 md:p-0">
        <HeroSection />
        <AboutMe />
        <Experience/>
        <Project />
        <Contact/>
      </main>
      <Footer />
    </>
  )
}
