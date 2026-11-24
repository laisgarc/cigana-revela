import {
  CalendarDays,
  Check,
  Compass,
  Heart,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  Plus,
  Sparkles,
  X,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import type { IconName } from '../types/content';

const iconComponents = {
  calendar: CalendarDays,
  cards: Layers3,
  check: Check,
  close: X,
  compass: Compass,
  heart: Heart,
  instagram: Instagram,
  menu: Menu,
  message: MessageCircle,
  moon: Moon,
  pin: MapPin,
  plus: Plus,
  screen: Monitor,
  sparkles: Sparkles,
} as const satisfies Record<IconName, LucideIcon>;

type IconProps = LucideProps & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  const Component = iconComponents[name];
  return <Component aria-hidden="true" strokeWidth={1.5} {...props} />;
}

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.8a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="M8.2 7.3c-.5 0-1.1.8-1.1 1.6 0 2.8 3.7 6.4 6.4 6.4.8 0 1.7-.7 1.7-1.2l-.1-.8-2-1-.8.9c-1.5-.6-2.4-1.6-3-3l.8-.8-.9-2.1h-1Z"/></svg>;
}

export function Star({ className = '' }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 40 40" fill="none"><path d="M20 2 24 16 38 20 24 24 20 38 16 24 2 20 16 16Z" stroke="currentColor" strokeWidth="1.2"/><path d="m8 8 8 8m8 8 8 8M32 8l-8 8M16 24l-8 8" stroke="currentColor" strokeWidth=".7"/></svg>;
}
