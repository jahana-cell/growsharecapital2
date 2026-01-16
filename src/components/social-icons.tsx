import Link from "next/link";
import { socialLinks } from "@/lib/constants";

const SocialIcons = ({ iconClassName }: { iconClassName?: string }) => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          aria-label={social.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClassName}
        >
          <social.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
