import { ContactProvider } from './components/Contact';
import { FixedContact, Footer, Header } from './components/Layout';
import { AboutSection } from './components/sections/AboutSection';
import { FaqSection } from './components/sections/FaqSection';
import { FinalSection } from './components/sections/FinalSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ReadingSection } from './components/sections/ReadingSection';
import { ThemesSection } from './components/sections/ThemesSection';
import { useIntersectionStatus } from './hooks/useIntersectionStatus';

function App() {
  const { elementRef: heroRef, isIntersecting: isHeroVisible } =
    useIntersectionStatus<HTMLElement>();

  return (
    <ContactProvider>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection ref={heroRef} />
        <ReadingSection />
        <ThemesSection />
        <AboutSection />
        <ProcessSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
      <FixedContact isVisible={!isHeroVisible} />
    </ContactProvider>
  );
}

export default App;
