import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { site } from '../content';
import { getWhatsAppUrl } from '../lib/contact';
import { Icon, WhatsAppIcon } from './Icons';

type ContactLocation = 'page' | 'header' | 'hero' | 'reading' | 'final' | 'fixed';

interface ContactButtonProps {
  children?: ReactNode;
  className?: string;
  location?: ContactLocation;
  message?: string;
}

const ContactContext = createContext<(() => void) | null>(null);

function useContactDialog() {
  const openContactDialog = useContext(ContactContext);

  if (!openContactDialog) {
    throw new Error('ContactButton deve ser usado dentro de ContactProvider.');
  }

  return openContactDialog;
}

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) dialog.showModal();
    else dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="contact-title"
    >
      <button className="dialog-close" onClick={onClose} aria-label="Fechar">
        <Icon name="close" />
      </button>
      <span className="eyebrow">Vamos conversar</span>
      <h2 id="contact-title">Seu primeiro passo pode ser uma mensagem.</h2>
      <p>
        No momento, o contato pelo WhatsApp não está disponível nesta página. Fale com a Raissa
        pelo Instagram para consultar leituras e horários.
      </p>
      <a
        className="button button-primary"
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" />
        Conversar pelo Instagram
      </a>
    </dialog>
  );
}

export function ContactProvider({ children }: PropsWithChildren) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openContactDialog = useCallback(() => setIsDialogOpen(true), []);
  const closeContactDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <ContactContext.Provider value={openContactDialog}>
      {children}
      <ContactDialog isOpen={isDialogOpen} onClose={closeContactDialog} />
    </ContactContext.Provider>
  );
}

export function ContactButton({
  children = 'Falar com a Raissa',
  className = '',
  location = 'page',
  message = site.message,
}: ContactButtonProps) {
  const openContactDialog = useContactDialog();
  const href = getWhatsAppUrl(site.whatsapp, message);
  const classes = ['button', 'button-primary', className].filter(Boolean).join(' ');
  const content = (
    <>
      <WhatsAppIcon />
      <span>{children}</span>
    </>
  );

  if (!href) {
    return (
      <button className={classes} onClick={openContactDialog} aria-haspopup="dialog">
        {content}
      </button>
    );
  }

  const trackContact = () => {
    window.dispatchEvent(new CustomEvent('contact:whatsapp', { detail: { location } }));
  };

  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackContact}
    >
      {content}
    </a>
  );
}
