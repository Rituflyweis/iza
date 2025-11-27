import { getFullName } from '../../../utils/constants';

const CustomerDetailsCard = ({ orderData }) => {
  const user = orderData?.user || {};
  const customerName = getFullName(user?.firstName, user?.lastName) || '-';
  const email = user?.email || '-';
  const phone = user?.mobileNumber || '-';
  const address = user?.location?.address || user?.address || '-';

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-base font-bold text-gray-900 mb-4">Customer Details</h3>
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-900">Name</span>
          <span className="text-gray-600 ml-2 capitalize">- {customerName}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Email</span>
          <span className="text-gray-600 ml-2">- {email}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Phone</span>
          <span className="text-gray-600 ml-2">- {phone}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Address</span>
          <span className="text-gray-600 ml-2">- {address}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsCard;

