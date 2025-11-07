import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddContactForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  // Sample contact data - in real app, fetch by id if editing
  const sampleContact = {
    id: 1,
    name: 'Tatiana Philips',
    contactNumber: '(629) 555-0129',
    email: 'abc@gmail.com',
    address: '4140 Parker Rd. Mexico 31134',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
  });

  useEffect(() => {
    if (isEdit && id) {
      // In real app, fetch contact by id
      // For now, use sample data
      setFormData({
        name: sampleContact.name,
        email: sampleContact.email,
        contactNumber: sampleContact.contactNumber,
        address: sampleContact.address,
      });
    }
  }, [id, isEdit]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit ? 'Update contact:' : 'Add contact:', formData);
    // Implement save logic here
    navigate('/customer-support');
  };

  const handleCancel = () => {
    navigate('/customer-support');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-6">
        {/* Form Fields in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Enter Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange('contactNumber')}
              placeholder="Enter Number"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              required
            />
          </div>

          {/* Right Column */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address (optional)
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={handleChange('address')}
              placeholder="Enter Address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 bg-white border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddContactForm;




