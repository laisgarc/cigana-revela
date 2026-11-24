import { site } from '../../content';
import { BotanicalArt } from '../CardArtwork';
import { Icon } from '../Icons';

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy">
          <h2 id="about-title">
            Por trás das cartas,
            <br />
            uma conversa
            <br />
            com <em>Raissa.</em>
          </h2>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-location">
            <Icon name="pin" />
            São Paulo · Atendimento online
          </div>
          <a
            className="instagram-link"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
            Conheça meu Instagram
          </a>
        </div>
        <div className="about-art">
          <BotanicalArt />
          <span className="art-label">BARALHO CIGANO & AUTOCONHECIMENTO</span>
        </div>
      </div>
    </section>
  );
}
