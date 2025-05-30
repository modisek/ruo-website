
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-32 w-auto' }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <div className={className}>
        <img
          src="/lovable-uploads/d1804037-9e24-4124-97c4-fc860e2a1967.png"
          alt="Ruolame - Your Agri-Home"
          className="h-full w-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
