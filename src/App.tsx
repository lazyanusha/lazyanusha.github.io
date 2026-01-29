import { lazy } from "react"
const HeroSection = lazy(() => import("./components/hero-section"));
const AboutMeSection = lazy(() => import("./components/about-me-section"));
const SkillsAndToolsSection = lazy(() => import("./components/skills-and-tools-section"));
const ProjectsSection = lazy(() => import("./components/projects-section"));
const ContactMeSection = lazy(() => import("./components/contact-me-section"));

function App() {

  return (
    <>
      <HeroSection/>
     <div className="grid grid-cols-2">
       <AboutMeSection/>
      <SkillsAndToolsSection/>
     </div>
      <ProjectsSection/>
      <ContactMeSection/>
    </>
  )
}

export default App
