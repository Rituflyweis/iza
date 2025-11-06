import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ContactSupportTable = () => {
  const navigate = useNavigate();

  // Sample contact data
  const contacts = [
    {
      id: 1,
      name: 'Tatiana Philips',
      contactNumber: '(629) 555-0129',
      email: 'abc@gmail.com',
      address: '4140 Parker Rd. Mexico 31134',
    },
    {
      id: 2,
      name: 'Tatiana Philips',
      contactNumber: '(629) 555-0129',
      email: 'abc@gmail.com',
      address: '4140 Parker Rd. Mexico 31134',
    },
    {
      id: 3,
      name: 'Tatiana Philips',
      contactNumber: '(629) 555-0129',
      email: 'abc@gmail.com',
      address: '4140 Parker Rd. Mexico 31134',
    },
  ];

  const handleEdit = (id) => {
    navigate(`/customer-support/edit-contact/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact person?')) {
      console.log('Delete contact:', id);
      // Implement delete logic
    }
  };

  const handleAdd = () => {
    navigate('/customer-support/add-contact');
  };

  return (
    <div className="w-full">
      {/* Add Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
        >
          <Icon icon="mdi:plus" width={20} height={20} />
          <span>Add</span>
        </button>
      </div>

      {/* Contact List - Card layout without table structure */}
      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <div
            key={contact.id}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="grid grid-cols-6 gap-4">
              {/* S.No. */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">S.No.</div>
                <div className="text-sm text-gray-900">{idx + 1}</div>
              </div>

              {/* Name */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">Name</div>
                <div className="text-sm text-gray-900 font-medium">{contact.name}</div>
              </div>

              {/* Contact Number */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">Contact Number</div>
                <div className="text-sm text-gray-900">{contact.contactNumber}</div>
              </div>

              {/* Email */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">Email</div>
                <div className="text-sm text-gray-900">{contact.email}</div>
              </div>

              {/* Address */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">Address</div>
                <div className="text-sm text-gray-900">{contact.address}</div>
              </div>

              {/* Action */}
              <div>
                <div className="text-xs font-bold text-gray-900 mb-1">Action</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(contact.id)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Edit contact"
                  >
                    <Icon icon="mdi:pencil" width={18} height={18} className="text-gray-900" />
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Delete contact"
                  >
                    <Icon icon="mdi:delete" width={18} height={18} className="text-gray-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSupportTable;
