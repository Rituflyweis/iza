import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const AddOfferHeader = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save offer');
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/offers-management")}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">
          Add New Offer
        </span>
      </div>

      <button 
        onClick={handleSave}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md text-sm"
      >
        Save
      </button>
    </div>
  );
};

export default AddOfferHeader;










