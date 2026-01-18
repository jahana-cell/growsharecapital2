import Link from 'next/link';
import { socialLinks } from '@/lib/constants';

interface SocialIconsProps {
  iconClassName?: string;
}

export const SocialIcons = ({ iconClassName = 'w-5 h-5 text-stone-400 hover:text-gold-accent transition-colors' }: SocialIconsProps) => {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClassName}
        >
          <social.icon aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
};
