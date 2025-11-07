import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentAnalyticsSnapshot from './components/ContentAnalyticsSnapshot';
import PostQueueCard from './components/PostQueueCard';
import CategoryTabs from './components/CategoryTabs';

const tabLabels = [
  'Homepage & Landing Pages',
  'Blog / Beauty Tips',
  'SEO Fields',
  'Legal & Info Pages',
  'Form Management',
  'Dynamic Sections',
];

const CMSContentControl = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div className=" p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">CMS &amp; Content Control</h1>
          <p className="text-sm text-gray-500">View and manage all content</p>
        </div>
        <button
          onClick={() => navigate('/cms-content/add')}
          className="self-start md:self-auto bg-[#F8069D] hover:bg-[#d50586] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          + Add New Post
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <ContentAnalyticsSnapshot className="flex-1" />
        <PostQueueCard className="w-full lg:max-w-xs lg:pl-6 lg:border-l lg:border-[#E5E7EB]" />
      </div>

      <div className="border-t border-[#F1F5F9] pt-6">
        <CategoryTabs value={activeTab} onChange={setActiveTab} tabs={tabLabels} />
        <div className="mt-5 space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">{tabLabels[activeTab]}</h2>
          <p className="text-sm text-gray-500">Manage and curate content for the selected category. Choose a post from the queue or create a new one to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default CMSContentControl;

