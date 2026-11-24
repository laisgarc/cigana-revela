import type { Ref } from 'react';
import { site } from '../../content';
import { CardArtwork } from '../CardArtwork';
import { ContactButton } from '../Contact';

interface HeroSectionProps {
  ref: Ref<HTMLElement>;
}

export function HeroSection({ ref }: HeroSectionProps) {
  return (
    <section className="hero" id="inicio" ref={ref} aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-line" />
            {site.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {site.hero.title} <em>{site.hero.emphasis}</em>
          </h1>
          <p className="hero-description">{site.hero.description}</p>
          <div className="hero-actions">
            <ContactButton location="hero" />
            <a className="text-link" href="#como-funciona">
              Entender como funciona
            </a>
          </div>
          <p className="microcopy">Consulte opções, valores e horários pelo WhatsApp.</p>
        </div>
        <CardArtwork />
      </div>
    </section>
  );
}
