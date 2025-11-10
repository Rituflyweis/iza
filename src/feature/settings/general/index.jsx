import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const GeneralSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">General Settings</h1>
          <p className="text-sm text-gray-400">Configure localisation options</p>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Currency</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100">
              <option>Indian Rupees</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Language</span>
            <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100">
              <option>English</option>
            </select>
          </label>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-gray-700">Shipping Policies</h2>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
              <li>Doorstep delivery across major cities.</li>
              <li>Vorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;


