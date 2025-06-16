
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-[20px] left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo className="h-16 w-auto" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary transition-colors text-base">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/products/feed" className="block px-4 py-2 hover:bg-primary-light hover:text-primary">Animal Feed</Link>
                <Link to="/products/seeds" className="block px-4 py-2 hover:bg-primary-light hover:text-primary">Seeds</Link>
                <Link to="/products/equipment" className="block px-4 py-2 hover:bg-primary-light hover:text-primary">Equipment</Link>
                <Link to="/products/supplements" className="block px-4 py-2 hover:bg-primary-light hover:text-primary">Supplements</Link>
              </div>
            </div>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white p-4 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <div className="py-1 border-b border-gray-200">
                <div className="font-medium text-gray-800 mb-1">Products</div>
                <div className="pl-4 flex flex-col space-y-2 pt-1">
                  <MobileNavLink to="/products/feed" nested>Animal Feed</MobileNavLink>
                  <MobileNavLink to="/products/seeds" nested>Seeds</MobileNavLink>
                  <MobileNavLink to="/products/equipment" nested>Equipment</MobileNavLink>
                  <MobileNavLink to="/products/supplements" nested>Supplements</MobileNavLink>
                </div>
              </div>
              <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active = false }) => (
  <Link
    to={to}
    className={`font-medium text-base ${active ? 'text-primary border-b-2 border-primary' : 'text-gray-800 hover:text-primary'
      } transition-colors`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active = false, nested = false }) => (
  <Link
    to={to}
    className={`${nested ? 'text-sm' : 'font-medium'
      } ${active ? 'text-primary' : 'text-gray-800 hover:text-primary'
      } transition-colors`}
  >
    {children}
  </Link>
);

export default Navbar;
