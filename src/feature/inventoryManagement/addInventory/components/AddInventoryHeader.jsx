import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const AddInventoryHeader = ({ isEdit = false }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/inventory')} className="p-1 rounded hover:bg-gray-100">
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">{isEdit ? 'Edit Inventory' : 'Add New Inventory'}</span>
      </div>
      <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md text-sm">{isEdit ? 'Update' : 'Save'}</button>
    </div>
  );
};

export default AddInventoryHeader;


