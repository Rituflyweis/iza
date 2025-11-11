import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const permissionItems = [
  'Admin Dashboard',
  'User Management',
  'Product Management',
  'Order Management',
  'Transaction Lists',
  'Content Management',
  'Inventory',
  'Promotion & discounts',
  'Reward Management',
  'Report & Analysis',
  'Notification',
  'Review & Feedback',
  'Alerts',
  'Policy Setting',
  'Push Notification',
  'FAQ',
  'Contact Support',
  'Ticket Raised',
];

const NewAdminRole = () => {
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
          <h1 className="text-xl font-semibold text-gray-900">Add Admin Role</h1>
          <p className="text-sm text-gray-400">
            Define access level and assign owners for the role
          </p>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          <label
            htmlFor="avatar"
            className="flex h-full min-h-[180px] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-center text-sm text-gray-500 transition hover:border-pink-500 hover:bg-pink-50"
          >
            <Icon icon="mdi:upload" width={32} height={32} className="text-gray-400" />
            <div>
              <p className="font-semibold text-gray-700">Upload Image</p>
              <p className="text-xs text-gray-400">Drag & drop or click to upload</p>
            </div>
            <input id="avatar" type="file" className="hidden" />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-700">Name</span>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-700">Email</span>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-700">Phone Number</span>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-700">Permission Type</span>
              <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
                <option value="">Select</option>
                <option value="view">View</option>
                <option value="edit">Edit</option>
                <option value="delete">Delete</option>
                <option value="full">Full Access</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900">Permissions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {permissionItems.map((permission) => (
              <div
                key={permission}
                className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-700"
              >
                {permission}
                <label className="relative inline-flex items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                  />
                  <span className="h-5 w-10 rounded-full bg-gray-200 transition peer-checked:bg-pink-500" />
                  <span className="absolute left-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white shadow transition peer-checked:left-6" />
                </label>
              </div>
            ))}
          </div>
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

export default NewAdminRole;

