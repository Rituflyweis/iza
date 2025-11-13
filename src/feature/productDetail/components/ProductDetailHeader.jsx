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
          className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
          <span className="text-lg font-semibold text-gray-900">View Details</span>
        </button>
      </div>
      <button 
        onClick={() => navigate(`/product-management/edit/${id}`)}
        className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2"
      >
        <Icon icon="mdi:pencil" width={16} height={16} />
        Edit
      </button>
    </div>
  );
};

export default ProductDetailHeader;

