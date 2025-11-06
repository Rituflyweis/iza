import { useNavigate } from 'react-router-dom';
import payment from '../../../assets/payment.png';
import shippingProvider from '../../../assets/shippingProvider.png';

const IntegrationCard = ({ imageSrc, title, onView }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-5 w-[260px] shadow-sm">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-50 mb-3 overflow-hidden">
      <img src={imageSrc} alt="icon" className="w-8 h-8 object-contain" />
    </div>
    <div className="text-sm font-semibold text-gray-900 leading-5 mb-4">
      {title}
    </div>
    <div className="flex justify-center">
      <button
        onClick={onView}
        className="px-6 py-1.5 rounded-md bg-white border-2 border-pink-600 text-pink-600 text-sm font-semibold hover:bg-pink-50"
      >
        View
      </button>
    </div>
  </div>
);

const IntegrationsManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-extrabold text-gray-900">INTEGRATIONS MANAGEMENT</h3>
      <div className="flex flex-wrap gap-6">
        <IntegrationCard
          imageSrc={payment}
          title={"Payment Gateway\nManagement"}
          onView={() => navigate('/third-party-integration/payment-gateway')}
        />
        <IntegrationCard
          imageSrc={shippingProvider}
          title={"Shipping Provider\nManagement"}
          onView={() => navigate('/third-party-integration/shipping-provider')}
        />
      </div>
    </div>
  );
};

export default IntegrationsManagement;
