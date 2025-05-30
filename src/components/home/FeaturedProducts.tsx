
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Maize',
    category: 'Feed',
    price: 83.99,
    image: "/public/maize.jpeg",
  },
  {
    id: '2',
    name: 'Mixed Fowl 5kg',
    category: 'Feed',
    price: 59.95,
    image: "/public/mixed-fowl.jpeg",
  },
  {
    id: '3',
    name: '4L Drinker',
    category: 'Equipment',
    price: 59.95,
    image: "./public/drinker.jpeg",
  },
  {
    id: '4',
    name: 'Egg Carton',
    category: 'Equipment',
    price: 3.00,
    image: "/egg-carton.jpeg",
  },
];

const FeaturedProducts = () => {
  const createWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in buying ${productName} from Ruolame Agric.`);
    return `https://wa.me/26776668077?text=${message}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured <span className="text-primary">Products</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our variety of seasonal, locally-sourced animal feed, gathered at
            the height of quality and brought fresh to your farm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-primary font-medium mb-1">{product.category}</div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="font-bold text-xl mb-2">P{product.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <a href={createWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">Buy on WhatsApp</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
