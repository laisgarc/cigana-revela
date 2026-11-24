import { site } from '../../content';
import type { SiteListItem } from '../../types/content';
import { Icon } from '../Icons';

function ThemeItem({ icon, title, text }: SiteListItem) {
  return (
    <article className="theme-item">
      <span className="theme-icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function ThemesSection() {
  return (
    <section className="section themes-section" id="caminhos" aria-labelledby="themes-title">
      <div className="container">
        <div className="section-heading centered">
          <h2 id="themes-title">
            O que você gostaria de olhar
            <br className="desktop-break" /> com mais <em>atenção?</em>
          </h2>
        </div>
        <div className="themes-grid">
          {site.themes.map((theme) => (
            <ThemeItem {...theme} key={theme.title} />
          ))}
        </div>
        <p className="section-footnote">
          As cartas abrem possibilidades de reflexão. As escolhas continuam sendo suas.
        </p>
      </div>
    </section>
  );
}
