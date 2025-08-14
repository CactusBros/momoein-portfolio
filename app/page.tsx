import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";
import TechStack from '../components/TechStack';


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechStack />
      <ProjectsSection/>
      <CTASection/>
    </main>
  );
}
