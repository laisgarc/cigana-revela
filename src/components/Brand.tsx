import { site } from '../content';
import { Star } from './Icons';

interface BrandProps {
  ariaLabel?: string;
}

export function Brand({ ariaLabel }: BrandProps) {
  return (
    <a className="brand" href="#inicio" aria-label={ariaLabel}>
      <Star />
      <span>
        {site.brand}
        <small>RAISSA VITÓRIA</small>
      </span>
    </a>
  );
}
