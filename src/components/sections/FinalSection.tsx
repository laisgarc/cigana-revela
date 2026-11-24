import { ContactButton } from '../Contact';
import { Star } from '../Icons';

export function FinalSection() {
  return (
    <section className="final-section" aria-labelledby="final-title">
      <div className="container final-inner">
        <Star className="final-star" />
        <h2 id="final-title">
          Quer reservar um momento
          <br />
          para olhar para <em>você?</em>
        </h2>
        <p>Consulte os horários para seu atendimento online.</p>
        <ContactButton location="final">Falar com a Raissa no WhatsApp</ContactButton>
      </div>
    </section>
  );
}
