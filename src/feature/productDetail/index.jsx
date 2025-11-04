import ProductDetailHeader from './components/ProductDetailHeader';
import ProductInfoSection from './components/ProductInfoSection';
import VariantsSection from './components/VariantsSection';
import IngredientsSection from './components/IngredientsSection';
import TagsSection from './components/TagsSection';

const ProductDetail = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6">
        <ProductDetailHeader />
        <ProductInfoSection />
        <VariantsSection />
        <IngredientsSection />
        <TagsSection />
      </div>
    </div>
  );
};

export default ProductDetail;

