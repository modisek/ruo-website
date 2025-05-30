import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Maize',
    category: 'feed',
    price: 83.99,
    description: 'High-quality maize feed for livestock, rich in essential nutrients. Our maize feed is specially formulated to provide optimal nutrition for your livestock, promoting healthy growth and development. It contains a balanced mix of proteins, carbohydrates, and essential minerals that support overall animal health.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '2',
    name: 'Lucerne',
    category: 'feed',
    price: 46.50,
    description: 'Premium lucerne hay, excellent forage for cattle, horses, and other livestock. Lucerne is known for its high protein content and digestibility, making it an ideal feed for dairy cows, beef cattle, horses, and other farm animals. It promotes healthy digestion and supports milk production in dairy cattle.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '3',
    name: 'Sprayer',
    category: 'equipment',
    price: 32.99,
    description: 'Multi-purpose sprayer for applying fertilizers, pesticides, and water. This versatile sprayer features adjustable nozzle settings, allowing you to control spray patterns for different applications. It comes with a durable tank and comfortable grip for ease of use during extended farming operations.',
    image: 'https://images.unsplash.com/photo-1598512752423-118f1a7dd392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '4',
    name: 'Molasses',
    category: 'feed',
    price: 65.99,
    description: 'Nutritious molasses supplement to enhance feed intake and animal health.',
    image: 'https://images.unsplash.com/photo-1635342219731-4ae827bbaec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '5',
    name: 'Organic Seeds',
    category: 'seeds',
    price: 12.99,
    description: 'Certified organic vegetable seeds for your garden or farm.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '6',
    name: 'Garden Tools Set',
    category: 'equipment',
    price: 89.99,
    description: 'Complete set of essential garden tools for all your farming needs.',
    image: 'https://images.unsplash.com/photo-1621955511667-e2c316e4575d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '7',
    name: 'Cattle Supplement',
    category: 'supplements',
    price: 54.99,
    description: 'Balanced mineral supplement for optimal cattle health and productivity.',
    image: 'https://images.unsplash.com/photo-1567107501864-e3f9aa8867d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '8',
    name: 'Drip Irrigation Kit',
    category: 'equipment',
    price: 129.99,
    description: 'Water-efficient drip irrigation system for your garden or small farm.',
    image: 'https://images.unsplash.com/photo-1603803721487-89a139402c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  const createWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in buying ${productName} from Ruolame Agric.`);
    return `https://wa.me/26776668077?text=${message}`;
  };
  
  if (!product) {
    return (
      <div className="min-h-screen">
        <PageHeader 
          title="Product Not Found"
          subtitle="We couldn't find the product you're looking for"
          noBackground
        />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="mb-6">The product you're looking for might have been removed or is no longer available.</p>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={product.name}
        subtitle={`Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`}
        noBackground
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to={`/products/${product.category}`} className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          <div>
            <div className="text-sm text-primary font-medium mb-2 capitalize">{product.category}</div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <div className="text-2xl font-bold mb-4">P{product.price.toFixed(2)}</div>
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            <Button size="lg" className="w-full sm:w-auto flex items-center" asChild>
              <a href={createWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Buy on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
