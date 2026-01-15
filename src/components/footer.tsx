
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-script">Artisanal Abode</h3>
            <p className="text-gray-400">
              Building resilient communities through intelligent, ethical, and high-yield investments.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#livestock" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Livestock
                </Link>
              </li>
              <li>
                <Link href="#healthcare" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#housing" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Housing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artisanal Abode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
