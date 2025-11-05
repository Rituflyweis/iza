import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const AddVideoHeader = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save video');
    // Implement save logic
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/video-management")}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">
          Add New Video
        </span>
      </div>

    </div>
  );
};

export default AddVideoHeader;


