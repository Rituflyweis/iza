import { useState } from 'react';
import { Switch } from '@mui/material';

const SettingRow = ({ label, enabled, onChange }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-200">
    <span className="text-sm text-gray-900">{label}</span>
    <Switch checked={enabled} onChange={(e) => onChange(e.target.checked)} color="primary" />
  </div>
);

const ManageSettingsForm = () => {
  const [settings, setSettings] = useState({
    enable3DSecure: false,
    enableMultiCurrency: false,
    customSetting: false,
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <SettingRow
        label="Enable 3D Secure Payment"
        enabled={settings.enable3DSecure}
        onChange={(value) => handleSettingChange('enable3DSecure', value)}
      />
      <SettingRow
        label="Enable Multi-currency Support"
        enabled={settings.enableMultiCurrency}
        onChange={(value) => handleSettingChange('enableMultiCurrency', value)}
      />
      <SettingRow
        label="Worem ipsum dolor sit"
        enabled={settings.customSetting}
        onChange={(value) => handleSettingChange('customSetting', value)}
      />
    </div>
  );
};

export default ManageSettingsForm;

