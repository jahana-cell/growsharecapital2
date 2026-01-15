
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/growsharecapital",
    icon: Facebook,
    ariaLabel: "Facebook",
  },
  {
    href: "https://www.instagram.com/growsharecapital",
    icon: Instagram,
    ariaLabel: "Instagram",
  },
  {
    href: "https://www.youtube.com/growsharecapital",
    icon: Youtube,
    ariaLabel: "YouTube",
  },
];

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
