import EditProductHeader from './components/EditProductHeader';
import FileUploadSection from './components/FileUploadSection';
import ProductFormSection from './components/ProductFormSection';
import VariantsEditSection from './components/VariantsEditSection';
import IngredientsEditSection from './components/IngredientsEditSection';
import TagsEditSection from './components/TagsEditSection';

const EditProduct = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6">
        <EditProductHeader />
        <FileUploadSection />
        <ProductFormSection />
        <VariantsEditSection />
        <IngredientsEditSection />
        <TagsEditSection />
      </div>
    </div>
  );
};

export default EditProduct;

