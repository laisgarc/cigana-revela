import { site } from '../../content';
import type { SiteListItem } from '../../types/content';
import { Icon } from '../Icons';

function ProcessStep({ icon, title, text }: SiteListItem) {
  return (
    <li className="step">
      <div className="step-icon">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}

export function ProcessSection() {
  return (
    <section className="section how-section" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="how-title">
            Sua consulta,
            <br />
            <em>passo a passo.</em>
          </h2>
        </div>
        <ol className="steps-grid">
          {site.steps.map((step) => (
            <ProcessStep {...step} key={step.title} />
          ))}
        </ol>
      </div>
    </section>
  );
}
