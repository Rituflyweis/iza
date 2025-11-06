import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const EditNotificationHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/notification')} className="p-1 rounded hover:bg-gray-100">
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <span className="font-semibold text-gray-900 text-base">Edit Notification</span>
      </div>
    </div>
  );
};

export default EditNotificationHeader;





