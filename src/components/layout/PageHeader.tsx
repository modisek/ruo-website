
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  noBackground?: boolean;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80", 
  children,
  noBackground = false
}: PageHeaderProps) => {
  return (
    <div 
      className={`relative h-80 md:h-96 flex items-center justify-center mb-12 overflow-hidden ${noBackground ? 'bg-primary-light' : ''}`}
      style={!noBackground ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {!noBackground && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
      <div className="relative z-10 text-center mx-auto px-4">
        <h1 className={`text-4xl md:text-5xl font-bold ${noBackground ? 'text-gray-800' : 'text-white'} mb-4`}>{title}</h1>
        {subtitle && (
          <p className={`text-lg md:text-xl ${noBackground ? 'text-gray-600' : 'text-white'} max-w-3xl mx-auto`}>{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
