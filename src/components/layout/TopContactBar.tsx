
import { Phone, Mail } from 'lucide-react';

const TopContactBar = () => {
  const phoneNumber = "+267 76 668 077";
  const email = "info@ruolame.co.bw";
  
  const createWhatsAppLink = () => {
    const message = encodeURIComponent("Hello, I'm interested in your products.");
    return `https://wa.me/26776668077?text=${message}`;
  };

  return (
    <div className="bg-primary h-[20px] text-white flex items-center fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-full text-xs">
        <div className="flex items-center space-x-6">
          <a 
            href={createWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-primary-light transition-colors"
          >
            <Phone className="h-3 w-3 mr-1" />
            <span>{phoneNumber}</span>
          </a>
          <a 
            href={`mailto:${email}`} 
            className="flex items-center hover:text-primary-light transition-colors"
          >
            <Mail className="h-3 w-3 mr-1" />
            <span>{email}</span>
          </a>
        </div>
        <div className="hidden md:block">
          <span>Opening Hours: Mon-Fri 8:00 AM - 5:00 PM, Sat 9:00 AM - 1:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
