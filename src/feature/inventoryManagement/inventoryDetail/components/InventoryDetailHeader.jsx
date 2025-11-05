import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";

const InventoryDetailHeader = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/inventory')} className="p-1 rounded hover:bg-gray-100">
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">View Inventory</span>
      </div>
      <button onClick={() => navigate(`/inventory/edit/${id}`)} className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md text-sm">Edit</button>
    </div>
  );
};

export default InventoryDetailHeader;


