import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddShippingForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    providerName: '',
    deliveryRegions: '',
    deliveryTimes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/third-party-integration/shipping-provider');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Save Shipping Provider', form);
    navigate('/third-party-integration/shipping-provider');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Provider Name</label>
          <input
            name="providerName"
            value={form.providerName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Delivery Regions</label>
          <input
            name="deliveryRegions"
            value={form.deliveryRegions}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Delivery Times</label>
          <input
            name="deliveryTimes"
            value={form.deliveryTimes}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Shipping Rates</label>
          <button
            type="button"
            className="w-full border border-gray-200 rounded-lg h-10 px-3 text-left text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Upload CSV
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="px-6 h-10 rounded-lg border-2 border-pink-600 text-pink-600 font-semibold"
        >
          Cancel
        </button>
        <button type="submit" className="px-6 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddShippingForm;

