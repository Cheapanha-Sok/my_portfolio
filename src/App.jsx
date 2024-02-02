import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import HeroSection from './pages/HeroSection'
import AboutMe from './pages/AboutMe'
import Project from './pages/Project'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen m-5 p-5 md:p-0 space-y-10">
        <HeroSection />
        <AboutMe />
        <Project />
        <Contact/>
      </main>
      <Footer />
    </>
  )
}
