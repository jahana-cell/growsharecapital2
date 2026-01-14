import { Home, Leaf, Heart, Building } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-deep-blue font-script">
          <Link href="/">Artisanal Abode</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#livestock" className="text-gray-600 hover:text-deep-blue transition-colors duration-300 flex items-center">
            <Leaf className="mr-2" />
            Livestock
          </Link>
          <Link href="#healthcare" className="text-gray-600 hover:text-deep-blue transition-colors duration-300 flex items-center">
            <Heart className="mr-2" />
            Healthcare
          </Link>
          <Link href="#housing" className="text-gray-600 hover:text-deep-blue transition-colors duration-300 flex items-center">
            <Building className="mr-2" />
            Housing
          </Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
