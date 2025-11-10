import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: 'General Settings',
    description: 'Manage localisation and shipping preferences',
    path: '/settings/general',
  },
  {
    title: 'Payment Settings',
    description: 'Configure checkout payment options',
    path: '/settings/payment',
  },
  {
    title: 'Tax Rules',
    description: 'Update regional tax rates & policies',
    path: '/settings/tax-rules',
  },
  {
    title: 'Loyalty & Rewards Configuration',
    description: 'Adjust loyalty tiers and reward rules',
    path: '/settings/loyalty',
    disabled: true,
  },
  {
    title: 'Admin Roles & Permissions',
    description: 'Control access across admin roles',
    path: '/settings/admin-roles',
    disabled: true,
  },
  {
    title: 'Shipping & Logistics',
    description: 'Manage shipping partners and deliveries',
    path: '/settings/shipping',
    disabled: true,
  },
];

const SettingsSectionList = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-400">Vorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="divide-y divide-gray-100">
        {sections.map((section) => (
          <button
            key={section.title}
            onClick={() => !section.disabled && navigate(section.path)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left transition hover:bg-gray-50"
            disabled={section.disabled}
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{section.title}</p>
              <p className="text-xs text-gray-400">{section.description}</p>
            </div>
            <Icon
              icon="mdi:chevron-right"
              width={20}
              height={20}
              className="text-gray-400"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsSectionList;


