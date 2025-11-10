import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const paymentMethods = [
  { id: 'credit-card', label: 'Credit Card' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'bank-transfer', label: 'Bank Transfer' },
  { id: 'upi', label: 'UPI' },
];

const PaymentSettings = () => {
  const navigate = useNavigate();
  const [activeMethods, setActiveMethods] = useState({});

  const toggleMethod = (id) => {
    setActiveMethods((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          <h1 className="text-xl font-semibold text-gray-900">Payment Settings</h1>
          <p className="text-sm text-gray-400">Enable payment methods and configure fees</p>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Payment Methods
        </h2>

        <div className="space-y-6">
          {paymentMethods.map((method) => {
            const enabled = Boolean(activeMethods[method.id]);
            return (
              <div
                key={method.id}
                className="flex flex-col gap-4 border-b border-gray-100 pb-6 last:border-none last:pb-0 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleMethod(method.id)}
                    className={`relative h-6 w-10 rounded-full transition ${
                      enabled ? 'bg-pink-500' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow transition ${
                        enabled ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm font-semibold text-gray-800">{method.label}</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Flat fee"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  />
                  <input
                    type="text"
                    placeholder="Percentage fee"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;


