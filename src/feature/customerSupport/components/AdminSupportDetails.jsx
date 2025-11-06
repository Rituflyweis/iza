import { useState } from 'react';
import { Icon } from '@iconify/react';
import supportBanner from "../../../assets/supportBanner.png"
const FieldRow = ({ icon, label, value, editable, onChange, type = 'text' }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-900">
      <Icon icon={icon} width={18} height={18} className="text-gray-600" />
      <span className="min-w-[130px] text-gray-700">{label}:</span>
      {editable ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      ) : (
        <span className="flex-1">{value}</span>
      )}
    </div>
  );
};

const AdminSupportDetails = ({ onClose }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState('supportadmin@iza.com');
  const [phone, setPhone] = useState('+91-9876543210');
  const [whatsapp, setWhatsapp] = useState('+91-9876543154');
  const [hours, setHours] = useState('10AM - 6PM');
  const [bannerFile, setBannerFile] = useState(null);

  const handleSave = () => {
    console.log('Saved details', { email, phone, whatsapp, hours, bannerFile });
    setIsEdit(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl w-full max-w-2xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <Icon icon="mdi:phone" width={18} height={18} />
            Admin Support Contact Details
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <Icon icon="mdi:close" width={18} height={18} className="text-gray-600" />
          </button>
        </div>

        {/* Body */}
        {/* Body */}
        {isEdit ? (
          // EDIT MODE: show only inputs, one per row, no headings and no banner
          <div className="px-5 py-4 space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="WhatsApp"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <input
              type="text"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Support Hours"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
        ) : (
          // VIEW MODE: show labeled rows and banner image
          <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <FieldRow icon="mdi:email" label="Email" value={email} editable={false} onChange={setEmail} type="email" />
              <FieldRow icon="mdi:phone" label="Phone" value={phone} editable={false} onChange={setPhone} />
              <FieldRow icon="mdi:whatsapp" label="WhatsApp" value={whatsapp} editable={false} onChange={setWhatsapp} />
              <FieldRow icon="mdi:clock-outline" label="Support Hours" value={hours} editable={false} onChange={setHours} />
              <div className="flex items-center gap-3 text-sm">
                <Icon icon="mdi:image" width={18} height={18} className="text-gray-600" />
                <span className="min-w-[130px] text-gray-700">Upload Banner:</span>
                <span className="text-gray-500">[Choose File]</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={supportBanner}
                alt="Support Banner"
                className="w-full max-w-[220px] rounded-lg object-cover"
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-5 pb-5">
          {isEdit ? (
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsEdit(false)} className="px-5 py-2 border-2 border-pink-600 text-pink-600 rounded-lg">
                Cancel
              </button>
              <button onClick={handleSave} className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
                Save
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button onClick={() => setIsEdit(true)} className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
                Edit Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSupportDetails;
