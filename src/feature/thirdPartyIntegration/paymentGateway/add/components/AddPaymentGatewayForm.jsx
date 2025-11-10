import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPaymentGatewayForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ gatewayName: '', apiKey: '', currency: '', region: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/third-party-integration/payment-gateway');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Save Payment Gateway', form);
    navigate('/third-party-integration/payment-gateway');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Gateway Name</label>
          <input
            name="gatewayName"
            value={form.gatewayName}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">API Key</label>
          <input
            name="apiKey"
            value={form.apiKey}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Currency</label>
          <input
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-[11px] text-gray-500 mb-2">Region</label>
          <input
            name="region"
            value={form.region}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button type="button" onClick={handleCancel} className="px-6 h-10 rounded-lg border-2 border-pink-600 text-pink-600 font-semibold">
          Cancel
        </button>
        <button type="submit" className="px-6 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddPaymentGatewayForm;




