
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categories = [
  { id: 'all', name: 'All Products', path: '/products' },
  { id: 'feed', name: 'Animal Feed', path: '/products/feed' },
  { id: 'seeds', name: 'Seeds', path: '/products/seeds' },
  { id: 'equipment', name: 'Equipment', path: '/products/equipment' },
  { id: 'supplements', name: 'Supplements', path: '/products/supplements' },
];

const ProductCategories = ({ selectedCategory, onSelectCategory }: ProductCategoriesProps) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse by <span className="text-primary">Category</span></h2>
      
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id || (category.id === 'all' && selectedCategory === null) ? 'default' : 'outline'}
            onClick={() => onSelectCategory(category.id === 'all' ? null : category.id)}
            className="mb-2"
            asChild
          >
            <Link to={category.path}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
