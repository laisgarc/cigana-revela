import { site } from '../../content';
import type { FaqItem as FaqItemContent } from '../../types/content';
import { Icon } from '../Icons';

function FaqItem({ question, answer }: FaqItemContent) {
  return (
    <details className="faq-item" name="faq">
      <summary>
        {question}
        <Icon name="plus" />
      </summary>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section className="section faq-section" id="duvidas" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="section-heading">
          <h2 id="faq-title">
            Ficou com
            <br />
            alguma <em>dúvida?</em>
          </h2>
          <p>Conheça um pouco mais sobre a experiência antes de dar o próximo passo.</p>
        </div>
        <div className="faq-list">
          {site.faqs.map((faq) => (
            <FaqItem {...faq} key={faq.question} />
          ))}
        </div>
      </div>
    </section>
  );
}
