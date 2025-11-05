import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const AlertSettings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    lowInventory: false,
    highReturnRates: false,
    unusualOrderActivity: false,
    fraudAlerts: false,
  });

  const toggle = (key) => {
    setSettings((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <div className="min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate('/alerts')}
          className="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Alert Settings</h2>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-xl p-6  ">
        <div className="flex flex-col gap-6">
          {/* Low Inventory */}
          <div className="flex items-center justify-between">
            <label className="text-base font-medium text-gray-900 cursor-pointer">
              Low Inventory
            </label>
            <button
              type="button"
              onClick={() => toggle('lowInventory')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                settings.lowInventory ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.lowInventory ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* High Return Rates */}
          <div className="flex items-center justify-between">
            <label className="text-base font-medium text-gray-900 cursor-pointer">
              High Return Rates
            </label>
            <button
              type="button"
              onClick={() => toggle('highReturnRates')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                settings.highReturnRates ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.highReturnRates ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Unusual Order Activity */}
          <div className="flex items-center justify-between">
            <label className="text-base font-medium text-gray-900 cursor-pointer">
              Unusual Order Activity
            </label>
            <button
              type="button"
              onClick={() => toggle('unusualOrderActivity')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                settings.unusualOrderActivity ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.unusualOrderActivity ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Fraud Alerts */}
          <div className="flex items-center justify-between">
            <label className="text-base font-medium text-gray-900 cursor-pointer">
              Fraud Alerts
            </label>
            <button
              type="button"
              onClick={() => toggle('fraudAlerts')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                settings.fraudAlerts ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.fraudAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSettings;


