export type IconName =
  | 'calendar'
  | 'cards'
  | 'check'
  | 'close'
  | 'compass'
  | 'heart'
  | 'instagram'
  | 'menu'
  | 'message'
  | 'moon'
  | 'pin'
  | 'plus'
  | 'screen'
  | 'sparkles';

export interface SiteListItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  name: string;
  brand: string;
  instagram: string;
  instagramHandle: string;
  whatsapp: string;
  message: string;
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    description: string;
  };
  themes: readonly SiteListItem[];
  steps: readonly SiteListItem[];
  about: {
    title: string;
    paragraphs: readonly string[];
  };
  faqs: readonly FaqItem[];
}
