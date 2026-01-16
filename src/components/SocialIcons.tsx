'use client';

import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const SocialIcons = ({ iconClassName }: { iconClassName?: string }) => {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" className="hover:opacity-70 transition-opacity">
        <Facebook className={iconClassName || "h-5 w-5"} />
      </Link>
      <Link href="#" className="hover:opacity-70 transition-opacity">
        <Instagram className={iconClassName || "h-5 w-5"} />
      </Link>
      <Link href="#" className="hover:opacity-70 transition-opacity">
        <Youtube className={iconClassName || "h-5 w-5"} />
      </Link>
    </div>
  );
};

export default SocialIcons;