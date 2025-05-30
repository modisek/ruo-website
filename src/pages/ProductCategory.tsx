
import { useParams } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import ProductGrid from '@/components/products/ProductGrid';
import { useEffect } from 'react';

const CategoryTitles = {
  feed: "Animal Feed",
  seeds: "Seeds & Planting",
  equipment: "Farm Equipment",
  supplements: "Supplements"
};

const CategoryDescriptions = {
  feed: "Quality animal feed products for livestock, poultry, and more",
  seeds: "High-quality seeds and planting materials for various crops",
  equipment: "Essential farming equipment and tools for agricultural needs",
  supplements: "Nutritional supplements to enhance livestock health and productivity"
};

const ProductCategory = () => {
  const { category } = useParams();
  
  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [category]);
  
  // Safely type check the category
  const safeCategory = category && 
    (category === 'feed' || category === 'seeds' || category === 'equipment' || category === 'supplements') 
    ? category 
    : null;
  
  const title = safeCategory ? CategoryTitles[safeCategory] : "Products";
  const description = safeCategory ? CategoryDescriptions[safeCategory] : "Browse our product selection";
  
  return (
    <div className="min-h-screen">
      <PageHeader 
        title={title}
        subtitle={description}
        noBackground
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ProductGrid selectedCategory={safeCategory} />
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
