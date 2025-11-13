import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const NewRewardTier = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Add New Reward Tier</h1>
          <p className="text-sm text-gray-400">Define rewards for spending milestones</p>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Price Range</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
              <option value="">Select</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Reward Type</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
              <option value="">Select</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Product</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
              <option value="">Select</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Reward</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
              <option value="">Select</option>
            </select>
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="rounded-full border border-pink-500 bg-pink-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRewardTier;




