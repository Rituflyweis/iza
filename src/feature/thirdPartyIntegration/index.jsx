import OverviewCards from './components/OverviewCards';
import IntegrationsManagement from './components/IntegrationsManagement';

const ThirdPartyIntegration = () => {
  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Third-party Integration</h1>
        <p className="text-xs text-gray-500">Vorem ipsum dolor sit</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-extrabold text-gray-900">Overview</h2>
        <OverviewCards />
      </div>

      <IntegrationsManagement />
    </div>
  );
};

export default ThirdPartyIntegration;



