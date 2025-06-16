
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-24  w-auto' }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <div className={className}>
        <img
          src="/lovable-uploads/d1804037-9e24-4124-97c4-fc860e2a1967.png"
          alt="Ruolame - Your Agri-Home"
          className="rou-lg h-full w-auto"
          style={{ height: '150px', marginTop: '-55px' }}


        />
      </div>
    </Link>
  );
};

export default Logo;
