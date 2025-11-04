import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailHeader = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate('/product-management')}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">View Details</h2>
      </div>
      <button 
        onClick={() => navigate(`/product-management/edit/${id}`)}
        className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Edit
      </button>
    </div>
  );
};

export default ProductDetailHeader;

