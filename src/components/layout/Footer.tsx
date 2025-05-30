
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Logo className="h-16 w-auto mb-4" />
            <p className="text-gray-600 text-sm mt-4">
              Your reliable partner for all agricultural needs. Providing quality products for farmers since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/feed" className="text-gray-600 hover:text-primary transition-colors">Animal Feed</Link>
              </li>
              <li>
                <Link to="/products/seeds" className="text-gray-600 hover:text-primary transition-colors">Seeds</Link>
              </li>
              <li>
                <Link to="/products/equipment" className="text-gray-600 hover:text-primary transition-colors">Equipment</Link>
              </li>
              <li>
                <Link to="/products/supplements" className="text-gray-600 hover:text-primary transition-colors">Supplements</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-start mb-2">
                <svg className="w-5 h-5 mr-2 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-600">
                  Bokaa,Machailo ward, behind Matronaat Lounge<br />
                  Botswana
                </span>
              </p>
              <p className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-600">+267 76 668 077</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-600">info@ruolame.co.bw</span>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Ruolame. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
