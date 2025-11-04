const CustomerDetailsCard = () => {
  const customerData = {
    name: 'John Smith',
    email: 'abc@gmail.com',
    phone: '1234556677',
    address: 'Lorem Ipsum',
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-base font-bold text-gray-900 mb-4">Customer Details</h3>
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-900">Name</span>
          <span className="text-gray-600 ml-2">- {customerData.name}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Email</span>
          <span className="text-gray-600 ml-2">- {customerData.email}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Phone</span>
          <span className="text-gray-600 ml-2">- {customerData.phone}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-900">Address</span>
          <span className="text-gray-600 ml-2">- {customerData.address}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsCard;

