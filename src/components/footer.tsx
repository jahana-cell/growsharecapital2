import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold font-script mb-4">Artisanal Abode</div>
        <p className="mb-4">Impactful Investments for a Better Future</p>
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" className="hover:text-forest-green">
            <Twitter />
          </Link>
          <Link href="#" className="hover:text-forest-green">
            <Linkedin />
          </Link>
          <Link href="#" className="hover:text-forest-green">
            <Facebook />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Artisanal Abode. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
