import { useCallback, useState } from 'react';
import { site } from '../content';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { Brand } from './Brand';
import { ContactButton } from './Contact';
import { Icon } from './Icons';

const navigationLinks = [
  { href: '#leituras', label: 'Leituras' },
  { href: '#sobre', label: 'Sobre a Raissa' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEscapeKey(closeMenu, isMenuOpen);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand ariaLabel="Raissa Vitória — início" />
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>
        <nav
          id="main-nav"
          className={isMenuOpen ? 'main-nav is-open' : 'main-nav'}
          aria-label="Navegação principal"
        >
          {navigationLinks.map(({ href, label }) => (
            <a href={href} onClick={closeMenu} key={href}>
              {label}
            </a>
          ))}
          <ContactButton className="header-contact" location="header" />
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand />
        <p>
          Leituras de Baralho Cigano.
          <br />
          São Paulo · Atendimento online.
        </p>
        <a
          className="footer-instagram"
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" />
          {site.instagramHandle}
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Raissa Vitória</span>
      </div>
    </footer>
  );
}

interface FixedContactProps {
  isVisible: boolean;
}

export function FixedContact({ isVisible }: FixedContactProps) {
  return (
    <div
      className={`fixed-contact ${isVisible ? 'is-visible' : ''}`}
      inert={!isVisible}
      aria-hidden={!isVisible}
    >
      <ContactButton location="fixed">Conversar no WhatsApp</ContactButton>
    </div>
  );
}
