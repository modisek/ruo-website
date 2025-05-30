
import PageHeader from '@/components/layout/PageHeader';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCategories from '@/components/products/ProductCategories';
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Products" 
        subtitle="Browse our selection of high-quality agricultural supplies and resources"
        noBackground
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ProductCategories 
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </section>
    </div>
  );
};

export default Products;
