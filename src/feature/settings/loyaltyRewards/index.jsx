import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import LoyaltyProgramTable from './components/LoyaltyProgramTable';
import RewardTiersTable from './components/RewardTiersTable';

const tabs = [
  { key: 'loyalty-program', label: 'Loyalty Program' },
  { key: 'reward-tiers', label: 'Reward Tiers' },
];

const LoyaltyRewards = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('loyalty-program');

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAddNew = () => {
    if (activeTab === 'loyalty-program') {
      navigate('/settings/loyalty-rewards/new/program');
      return;
    }
    navigate('/settings/loyalty-rewards/new/reward-tier');
  };

  const handleEdit = () => {
    handleAddNew();
  };

  return (
    <div className="">
      <div className="mb-5 flex flex-col gap-4  md:flex-row md:items-center md:justify-between">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Loyalty &amp; Rewards Configuration
          </h1>
          <p className="text-sm text-gray-400">
            Manage loyalty programs and customize reward tiers
          </p>
        </div>
      </div>
 <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <div className="relative w-full md:w-64">
            <Icon
              icon="mdi:magnify"
              width={18}
              height={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
            />
          </div>
          <button
            onClick={handleAddNew}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600"
          >
            <Icon icon="mdi:plus" width={16} height={16} />
            Add New
          </button>
        </div>
        </div>
      <div className="mb-5 flex flex-col gap-4  md:flex-row md:items-center md:justify-between">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
     
        >
          {tabs.map((tab) => (
            <Tab key={tab.key} value={tab.key} label={tab.label} />
          ))}
        </Tabs>
      
      </div>

      {activeTab === 'loyalty-program' ? (
        <LoyaltyProgramTable onEdit={handleEdit} />
      ) : (
        <RewardTiersTable onEdit={handleEdit} />
      )}
    </div>
  );
};

export default LoyaltyRewards;

