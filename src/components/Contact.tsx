import { createContext, useContext, useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { site } from '../content';
import { getWhatsAppUrl } from '../lib/contact';
import { Icon, WhatsAppIcon } from './Icons';

const ContactContext = createContext<() => void>(() => {});

export function ContactProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);
  return <ContactContext.Provider value={() => setOpen(true)}>
    {children}
    <dialog ref={dialog} className="contact-dialog" onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }} aria-labelledby="contact-title">
      <button className="dialog-close" onClick={() => setOpen(false)} aria-label="Fechar"><Icon name="close"/></button>
      <span className="eyebrow">Vamos conversar</span>
      <h2 id="contact-title">Seu primeiro passo pode ser uma mensagem.</h2>
      <p>No momento, o contato pelo WhatsApp não está disponível nesta página. Fale com a Raissa pelo Instagram para consultar leituras e horários.</p>
      <a className="button button-primary" href={site.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram"/>Conversar pelo Instagram</a>
    </dialog>
  </ContactContext.Provider>;
}

export function ContactButton({ children = 'Falar com a Raissa', className = '', location = 'page', message = site.message }: PropsWithChildren<{ className?: string; location?: string; message?: string }>) {
  const openContact = useContext(ContactContext);
  const href = getWhatsAppUrl(site.whatsapp, message);
  const classes = `button button-primary ${className}`;
  const content = <><WhatsAppIcon/><span>{children}</span></>;
  if (!href) return <button className={classes} onClick={openContact} aria-haspopup="dialog">{content}</button>;
  return <a className={classes} href={href} target="_blank" rel="noopener noreferrer" onClick={() => {
    window.dispatchEvent(new CustomEvent('contact:whatsapp', { detail: { location } }));
  }}>{content}</a>;
}
