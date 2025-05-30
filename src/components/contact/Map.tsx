
import { useEffect, useRef } from 'react';

interface MapProps {
  address?: string;
  lat?: number;
  lng?: number;
}

const Map = ({ 
  address = "Plot 8423, Gaborone Main Mall, Gaborone Botswana", 
  lat = -24.6282, 
  lng = 25.9231 
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We'll use a simple iframe approach for the map
    // In a real application, you might want to use a proper mapping library
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBnrEWT1OhF4rBAVXXM9xle_0S4that6AE&q=${encodeURIComponent(address)}&center=${lat},${lng}&zoom=15`;
      iframe.style.border = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      
      // Clear any existing content and append the iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, [address, lat, lng]);

  return (
    <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-md relative">
      <div ref={mapRef} className="absolute inset-0" />
    </div>
  );
};

export default Map;
