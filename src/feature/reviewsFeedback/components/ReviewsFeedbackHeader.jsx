import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const ReviewsFeedbackHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1.5 rounded-full hover:bg-gray-100 transition"
          aria-label="Back"
        >
          <Icon icon="mdi:chevron-left" width={22} height={22} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">Reviews &amp; Feedback</h1>
      </div>

      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold shadow-sm">
        <Icon icon="mdi:tune-variant" width={18} height={18} />
        Filter
      </button>
    </div>
  );
};

export default ReviewsFeedbackHeader;


