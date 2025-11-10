import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const AddCMSPostHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate('/cms-content')}
          className="p-1 rounded hover:bg-gray-100"
          aria-label="Back to CMS content"
        >
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Add New Post</h1>
          <p className="text-sm text-gray-500">Create and publish content for your CMS</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button className="px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold">
          Save Post
        </button>
      </div>
    </div>
  );
};

export default AddCMSPostHeader;


