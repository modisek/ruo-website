
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface ProductGridProps {
  selectedCategory: string | null;
}

const products: Product[] = [
  {
    "id": "1",
    "name": "Wheat/Korong 500g",
    "category": "grain",
    "price": 19.95,
    "description": "High-quality wheat/korong for various uses.",
    "image": "/public/korong.jpeg"
  },
  {
    "id": "2",
    "name": "Wheat/Korong 1kg",
    "category": "grain",
    "price": 39.95,
    "description": "High-quality wheat/korong for various uses.",
    "image": "/public/korong.jpeg"
  },
  {
    "id": "3",
    "name": "Mung Beans/Letlhodi 500g",
    "category": "grain",
    "price": 17.95,
    "description": "Nutritious mung beans for animal feed or human consumption.",
    "image": "/public/peas.jpeg"
  },
  {
    "id": "4",
    "name": "Mung Beans/Letlhodi 1kg",
    "category": "grain",
    "price": 39.95,
    "description": "Nutritious mung beans for animal feed or human consumption.",
    "image": "/public/peas.jpeg"
  },
  {
    "id": "5",
    "name": "Sugar Beans 500g",
    "category": "grain",
    "price": 22.95,
    "description": "Quality sugar beans for feed or culinary use.",
    "image": "/public/bean.jpeg"
  },
  {
    "id": "6",
    "name": "Sugar Beans 1kg",
    "category": "grain",
    "price": 45.95,
    "description": "Quality sugar beans for feed or culinary use.",
    "image": "/public/bean.jpeg"
  },
  {
    "id": "7",
    "name": "Sugar Beans 2.5kg",
    "category": "grain",
    "price": 110.95,
    "description": "Quality sugar beans for feed or culinary use.",
    "image": "/public/bean.jpeg"
  },
  {
    "id": "8",
    "name": "Yellow Maize 2.5kg",
    "category": "grain",
    "price": 24.94,
    "description": "Yellow maize for animal feed or processing.",
    "image": "/public/maize.jpeg"
  },
  {
    "id": "9",
    "name": "Yellow Maize 5kg",
    "category": "grain",
    "price": 59.95,
    "description": "Yellow maize for animal feed or processing.",
    "image": "/public/maize.jpeg"
  },
  {
    "id": "10",
    "name": "Yellow Maize 10kg",
    "category": "grain",
    "price": 80.95,
    "description": "Yellow maize for animal feed or processing.",
    "image": "/public/maize.jpeg"
  },
  {
    "id": "11",
    "name": "Mixed Fowl 5kg",
    "category": "feed",
    "price": 59.95,
    "description": "Balanced feed mix for poultry.",
    "image": "/public/mixed-fowl.jpeg"
  },
  {
    "id": "12",
    "name": "Mixed Fowl 10kg",
    "category": "feed",
    "price": 90.00,
    "description": "Balanced feed mix for poultry.",
    "image": "/public/mixed-fowl.jpeg"
  },
  {
    "id": "13",
    "name": "Sorghum 2.5kg",
    "category": "grain",
    "price": 34.95,
    "description": "Nutritious sorghum for feed or food use.",
    "image": "/public/sorghum.jpeg"
  },
  {
    "id": "14",
    "name": "Sorghum 5kg",
    "category": "grain",
    "price": 69.75,
    "description": "Nutritious sorghum for feed or food use.",
    "image": "/public/sorghum.jpeg"
  },
  {
    "id": "15",
    "name": "Sorghum 10kg",
    "category": "grain",
    "price": 130.50,
    "description": "Nutritious sorghum for feed or food use.",
    "image": "/public/sorghum.jpeg"
  },
  {
    "id": "16",
    "name": "Sorghum 50kg",
    "category": "grain",
    "price": 400.00,
    "description": "Nutritious sorghum for feed or food use.",
    "image": "/public/sorghum.jpeg"
  },
  {
    "id": "18",
    "name": "Irvines Broiler Grower",
    "category": "feed",
    "price": 404.95,
    "description": "Specialized feed for growing broilers.",
    "image": null
  },
  {
    "id": "19",
    "name": "Irvines Broiler Finisher",
    "category": "feed",
    "price": 376.95,
    "description": "Feed for finishing broilers.",
    "image": null
  },
  {
    "id": "20",
    "name": "Irvines Layers Mash",
    "category": "feed",
    "price": 332.95,
    "description": "Nutritious mash for laying hens.",
    "image": null
  },
  {
    "id": "21",
    "name": "Anbo Broiler Starter 2.5kg",
    "category": "feed",
    "price": 32.65,
    "description": "Starter feed for young broilers.",
    "image": null
  },
  {
    "id": "22",
    "name": "Anbo Broiler Starter 5kg",
    "category": "feed",
    "price": 54.45,
    "description": "Starter feed for young broilers.",
    "image": null
  },
  {
    "id": "23",
    "name": "Anbo Broiler Starter 10kg",
    "category": "feed",
    "price": 130.75,
    "description": "Starter feed for young broilers.",
    "image": null
  },
  {
    "id": "24",
    "name": "Anbo Broiler Starter 50kg",
    "category": "feed",
    "price": 439.95,
    "description": "Starter feed for young broilers.",
    "image": null
  },
  {
    "id": "25",
    "name": "Anbo Broiler Grower 5kg",
    "category": "feed",
    "price": 63.75,
    "description": "Feed for growing broilers.",
    "image": null
  },
  {
    "id": "26",
    "name": "Anbo Broiler Grower 10kg",
    "category": "feed",
    "price": 126.95,
    "description": "Feed for growing broilers.",
    "image": null
  },
  {
    "id": "27",
    "name": "Anbo Broiler Grower 50kg",
    "category": "feed",
    "price": 422.50,
    "description": "Feed for growing broilers.",
    "image": null
  },
  {
    "id": "28",
    "name": "Anbo Broiler Finisher",
    "category": "feed",
    "price": 422.50,
    "description": "Feed for finishing broilers.",
    "image": null
  },
  {
    "id": "29",
    "name": "Anbo Layers Mash 5kg",
    "category": "feed",
    "price": 46.85,
    "description": "Mash for laying hens.",
    "image": null
  },
  {
    "id": "30",
    "name": "Anbo Layers Mash 10kg",
    "category": "feed",
    "price": 93.95,
    "description": "Mash for laying hens.",
    "image": null
  },
  {
    "id": "31",
    "name": "Anbo Layers Mash 50kg",
    "category": "feed",
    "price": 348.95,
    "description": "Mash for laying hens.",
    "image": null
  },
  {
    "id": "32",
    "name": "Anbo Super Mixed Bran 10kg",
    "category": "feed",
    "price": 60.00,
    "description": "Mixed bran for animal feed.",
    "image": null
  },
  {
    "id": "33",
    "name": "Anbo Super Mixed Bran 30kg",
    "category": "feed",
    "price": 170.00,
    "description": "Mixed bran for animal feed.",
    "image": null
  },
  {
    "id": "34",
    "name": "Tsabana Bran",
    "category": "feed",
    "price": 150.00,
    "description": "Bran feed for livestock.",
    "image": null
  },
  {
    "id": "35",
    "name": "BAMB Feedlot Finisher",
    "category": "feed",
    "price": 230.95,
    "description": "Feed for finishing livestock in feedlots.",
    "image": null
  },
  {
    "id": "36",
    "name": "BAMB Bull Ration",
    "category": "feed",
    "price": 210.00,
    "description": "Specialized ration for bulls.",
    "image": null
  },
  {
    "id": "37",
    "name": "Sunflower Husks",
    "category": "feed",
    "price": 84.95,
    "description": "Sunflower husks for animal feed.",
    "image": null
  },
  {
    "id": "38",
    "name": "4L Drinker",
    "category": "equipment",
    "price": 59.95,
    "description": "4L capacity drinker for poultry.",
    "image": "./public/drinker.jpeg"
  },
  {
    "id": "39",
    "name": "750ml Chick Drinker",
    "category": "equipment",
    "price": 34.95,
    "description": "750ml drinker for chicks.",
    "image": null
  },
  {
    "id": "40",
    "name": "Chick Hinged Feeder",
    "category": "equipment",
    "price": 49.95,
    "description": "Hinged feeder for chicks.",
    "image": null
  },
  {
    "id": "41",
    "name": "Chick Feeder Complete",
    "category": "equipment",
    "price": 74.95,
    "description": "Complete feeder for chicks.",
    "image": null
  },
  {
    "id": "42",
    "name": "Egg Carton",
    "category": "equipment",
    "price": 3.00,
    "description": "Egg curtain for poultry nesting.",
    "image": null
  }
];

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const createWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in buying ${productName} from Ruolame Agric.`);
    return `https://wa.me/26776668077?text=${message}`;
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {filteredProducts.map(product => (
        <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <Link to={`/product/${product.id}`} className="block">
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="text-sm text-primary font-medium mb-1 capitalize">{product.category}</div>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="font-bold text-xl mb-2">P{product.price.toFixed(2)}</div>
            </CardContent>
          </Link>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" asChild>
              <a href={createWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">Buy on WhatsApp</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
