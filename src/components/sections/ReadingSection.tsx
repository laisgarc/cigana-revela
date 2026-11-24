import { ContactButton } from '../Contact';
import { Icon, Star } from '../Icons';

const readingBenefits = [
  'Atendimento online, sem deslocamento',
  'Formato e duração combinados antes do agendamento',
  'Opções, valores e horários informados pelo WhatsApp',
] as const;

export function ReadingSection() {
  return (
    <section className="section reading-section" id="leituras" aria-labelledby="reading-title">
      <div className="container reading-panel">
        <Star className="reading-watermark" />
        <div className="reading-intro">
          <h2 id="reading-title">
            Olhe para o seu
            <br />
            <em>agora.</em>
          </h2>
          <p>
            Conte o que deseja compreender. Raissa apresenta as opções disponíveis e combina com
            você os detalhes da leitura antes do agendamento.
          </p>
        </div>
        <div className="reading-offer">
          <span className="offer-label">
            <Icon name="cards" />
            LEITURA ONLINE
          </span>
          <h3>Baralho Cigano</h3>
          <p>
            Um encontro para refletir sobre suas dúvidas, seus relacionamentos e suas escolhas.
          </p>
          <ul>
            {readingBenefits.map((benefit) => (
              <li key={benefit}>
                <Icon name="check" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <ContactButton location="reading">Consultar opções e valores no WhatsApp</ContactButton>
          <small>Tire suas dúvidas antes de escolher e agendar.</small>
        </div>
      </div>
    </section>
  );
}
