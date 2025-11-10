import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import TaxRulesTable from './components/TaxRulesTable';

const TaxRules = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Tax Rules</h1>
          <p className="text-sm text-gray-400">Manage tax rates by region</p>
        </div>
      </div>

      <TaxRulesTable onAddNew={() => navigate('/settings/tax-rules/new')} />
    </div>
  );
};

export default TaxRules;


