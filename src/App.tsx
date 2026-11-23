import { useEffect, useRef, useState } from 'react';
import { site } from './content';
import { Icon, Star } from './components/Icons';
import { CardArtwork, BotanicalArt } from './components/CardArtwork';
import { ContactButton, ContactProvider } from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFixed, setShowFixed] = useState(false);
  const hero = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setShowFixed(!entry.isIntersecting), { threshold: 0 });
    if (hero.current) observer.observe(hero.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return <ContactProvider>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Raissa Vitória — início"><Star/><span>{site.brand}<small>RAISSA VITÓRIA</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}><Icon name={menuOpen ? 'close' : 'menu'}/></button>
        <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#leituras" onClick={() => setMenuOpen(false)}>Leituras</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a Raissa</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
          <ContactButton className="header-contact" location="header"/>
        </nav>
      </div>
    </header>

    <main id="conteudo">
      <section className="hero" id="inicio" ref={hero} aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-line"/>{site.hero.eyebrow}</p>
            <h1 id="hero-title">{site.hero.title} <em>{site.hero.emphasis}</em></h1>
            <p className="hero-description">{site.hero.description}</p>
            <div className="hero-actions"><ContactButton location="hero"/><a className="text-link" href="#como-funciona">Entender como funciona</a></div>
            <p className="microcopy">Consulte opções, valores e horários pelo WhatsApp.</p>
          </div>
          <CardArtwork/>
        </div>
      </section>

      <section className="section reading-section" id="leituras" aria-labelledby="reading-title">
        <div className="container reading-panel">
          <Star className="reading-watermark"/>
          <div className="reading-intro">
            <h2 id="reading-title">Olhe para o seu<br/><em>agora.</em></h2>
            <p>Conte o que deseja compreender. Raissa apresenta as opções disponíveis e combina com você os detalhes da leitura antes do agendamento.</p>
          </div>
          <div className="reading-offer">
            <span className="offer-label"><Icon name="cards"/>LEITURA ONLINE</span>
            <h3>Baralho Cigano</h3>
            <p>Um encontro para refletir sobre suas dúvidas, seus relacionamentos e suas escolhas.</p>
            <ul>
              <li><Icon name="check"/><span>Atendimento online, sem deslocamento</span></li>
              <li><Icon name="check"/><span>Formato e duração combinados antes do agendamento</span></li>
              <li><Icon name="check"/><span>Opções, valores e horários informados pelo WhatsApp</span></li>
            </ul>
            <ContactButton location="reading">Consultar opções e valores no WhatsApp</ContactButton>
            <small>Tire suas dúvidas antes de escolher e agendar.</small>
          </div>
        </div>
      </section>

      <section className="section themes-section" id="caminhos" aria-labelledby="themes-title">
        <div className="container">
          <div className="section-heading centered"><h2 id="themes-title">O que você gostaria de olhar<br className="desktop-break"/> com mais <em>atenção?</em></h2></div>
          <div className="themes-grid">{site.themes.map(theme => <article className="theme-item" key={theme.title}><span className="theme-icon"><Icon name={theme.icon}/></span><h3>{theme.title}</h3><p>{theme.text}</p></article>)}</div>
          <p className="section-footnote">As cartas abrem possibilidades de reflexão. As escolhas continuam sendo suas.</p>
        </div>
      </section>

      <section className="section about-section" id="sobre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-copy"><h2 id="about-title">Por trás das cartas,<br/>uma conversa<br/>com <em>Raissa.</em></h2>{site.about.paragraphs.map(p => <p key={p}>{p}</p>)}<div className="about-location"><Icon name="pin"/>São Paulo · Atendimento online</div><a className="instagram-link" href={site.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram"/>Conheça meu Instagram</a></div>
          <div className="about-art"><BotanicalArt/><span className="art-label">BARALHO CIGANO & AUTOCONHECIMENTO</span></div>
        </div>
      </section>

      <section className="section how-section" id="como-funciona" aria-labelledby="how-title">
        <div className="container">
          <div className="section-heading"><h2 id="how-title">Sua consulta,<br/><em>passo a passo.</em></h2></div>
          <ol className="steps-grid">{site.steps.map(step => <li className="step" key={step.title}><div className="step-icon"><Icon name={step.icon}/></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="section faq-section" id="duvidas" aria-labelledby="faq-title">
        <div className="container faq-grid"><div className="section-heading"><h2 id="faq-title">Ficou com<br/>alguma <em>dúvida?</em></h2><p>Conheça um pouco mais sobre a experiência antes de dar o próximo passo.</p></div><div className="faq-list">{site.faqs.map(faq => <details className="faq-item" key={faq.question} name="faq"><summary>{faq.question}<Icon name="plus"/></summary><div className="faq-answer"><p>{faq.answer}</p></div></details>)}</div></div>
      </section>

      <section className="final-section" aria-labelledby="final-title"><div className="container final-inner"><Star className="final-star"/><h2 id="final-title">Quer reservar um momento<br/>para olhar para <em>você?</em></h2><p>Consulte os horários para seu atendimento online.</p><ContactButton location="final">Falar com a Raissa no WhatsApp</ContactButton></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#inicio"><Star/><span>{site.brand}<small>RAISSA VITÓRIA</small></span></a><p>Leituras de Baralho Cigano.<br/>São Paulo · Atendimento online.</p><a className="footer-instagram" href={site.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram"/>{site.instagramHandle}</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Raissa Vitória</span></div></footer>
    <div className={`fixed-contact ${showFixed ? 'is-visible' : ''}`} inert={!showFixed} aria-hidden={!showFixed}><ContactButton location="fixed">Conversar no WhatsApp</ContactButton></div>
  </ContactProvider>;
}

export default App;
