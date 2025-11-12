import { useState } from 'react';
import { Icon } from '@iconify/react';

const SectionHeading = ({ title, isEditMode = false }) => (
  <div className="mb-4">
    <h3 className={`text-sm font-semibold uppercase tracking-wide ${
      isEditMode ? 'text-black' : 'text-pink-500'
    }`}>
      {title}
    </h3>
  </div>
);

const TextField = ({ label, placeholder, value, onChange, name, disabled = false }) => (
  <label className="flex flex-col gap-2">
    <span className="text-xs font-semibold text-gray-600">{label}</span>
    <input
      type="text"
      name={name}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={disabled}
      className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ${
        disabled 
          ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
          : 'bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
      }`}
    />
  </label>
);

const SelectField = ({ label, placeholder, value, onChange, name, disabled = false }) => (
  <label className="flex flex-col gap-2">
    <span className="text-xs font-semibold text-gray-600">{label}</span>
    <select 
      name={name}
      value={value || ''}
      onChange={onChange}
      disabled={disabled}
      className={`w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ${
        disabled 
          ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
          : 'bg-white text-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
      }`}
    >
      <option value="">{placeholder}</option>
    </select>
  </label>
);

const ViewVendorForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAdditionalSections, setShowAdditionalSections] = useState(false);
  const [formData, setFormData] = useState({
    userFullName: 'John Doe',
    userIdEmail: 'john.doe@example.com',
    vendorCompanyName: 'ABC Company',
    businessType: 'Retail',
    businessCategory: 'Electronics',
    businessDescription: 'We are a leading retailer of electronic products...',
    websiteInstagram1: 'https://www.example.com',
    websiteInstagram2: 'https://www.instagram.com/example',
    officialEmail: 'contact@abccompany.com',
    officialPhoneNumber: '+1 234-567-8900',
    businessAddress: '123 Main Street, City, State, ZIP Code',
    adminNote: 'Verified vendor',
    submittedOn: '2024-01-15',
    uploadedDocuments: 'document.pdf',
    fieldsTitle1: '',
    fieldsName1: '',
    fields1: '',
    fieldsName2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = () => {
    setIsEditMode(prev => !prev);
    // Reset additional sections when exiting edit mode
    if (isEditMode) {
      setShowAdditionalSections(false);
    }
  };

  const handleAddFieldSection = () => {
    setShowAdditionalSections(true);
  };

  const handleSaveChanges = () => {
    // Save form data here (you can add API call or other save logic)
    console.log('Saving form data:', formData);
    setIsEditMode(false);
    setShowAdditionalSections(false);
  };
  return (
    <div className="space-y-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <button className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900">
            <Icon icon="mdi:chevron-left" width={20} height={20} />
            View Vendor Form
          </button>
        </div>
        <div className="flex items-center gap-3">
          {isEditMode && (
            <button 
              onClick={handleAddFieldSection}
              className="rounded-lg bg-black px-6 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800"
            >
              + Add Field / Section
            </button>
          )}
          <button 
            onClick={handleEditToggle}
            className="rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600"
          >
            {isEditMode ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>

      <SectionHeading title="Submitted By" isEditMode={isEditMode} />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField 
          label="User Full Name" 
          placeholder="User Full Name" 
          name="userFullName"
          value={formData.userFullName}
          onChange={handleChange}
          disabled={!isEditMode}
        />
        <TextField 
          label="User ID / Email" 
          placeholder="User ID / Email" 
          name="userIdEmail"
          value={formData.userIdEmail}
          onChange={handleChange}
          disabled={!isEditMode}
        />
      </div>

      <SectionHeading title="Vendor (Company) Details" isEditMode={isEditMode} />
      <div className="grid gap-4 md:grid-cols-1">
        <SelectField 
          label="Vendor / Company Name" 
          placeholder="Enter Vendor / Company Name" 
          name="vendorCompanyName"
          value={formData.vendorCompanyName}
          onChange={handleChange}
          disabled={!isEditMode}
        />
        <SelectField 
          label="Business Type" 
          placeholder="Select Business Type" 
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          disabled={!isEditMode}
        />
        <SelectField 
          label="Business Category" 
          placeholder="Select Business Category" 
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
          disabled={!isEditMode}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-xs font-semibold text-gray-600">Business Description</span>
            <textarea
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              disabled={!isEditMode}
              readOnly={!isEditMode}
              rows={4}
              placeholder="Write Business Description (200-300 Words)"
              className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ${
                !isEditMode 
                  ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
                  : 'bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
              }`}
            />
          </label>
          <TextField 
            label="Website / Instagram" 
            placeholder="Link 1" 
            name="websiteInstagram1"
            value={formData.websiteInstagram1}
            onChange={handleChange}
            disabled={!isEditMode}
          />
          <TextField 
            label=" " 
            placeholder="Link 2" 
            className="mt-5"
            name="websiteInstagram2"
            value={formData.websiteInstagram2}
            onChange={handleChange}
            disabled={!isEditMode}
          />
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-xs font-semibold text-gray-600">Business Logo</span>
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3">
              <span className="text-sm text-gray-500">Upload Business Logo</span>
              <button className="ml-auto rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-500">
                Upload File
              </button>
            </div>
          </label>
        </div>

      </div>



      <SectionHeading title="Contact Information" isEditMode={isEditMode} />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField 
          label="Official Email" 
          placeholder="Enter Official Email" 
          name="officialEmail"
          value={formData.officialEmail}
          onChange={handleChange}
          disabled={!isEditMode}
        />
        <TextField 
          label="Official Phone Number" 
          placeholder="Enter Official Phone Number" 
          name="officialPhoneNumber"
          value={formData.officialPhoneNumber}
          onChange={handleChange}
          disabled={!isEditMode}
        />

      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-xs font-semibold text-gray-600">Business Address</span>
          <textarea
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            disabled={!isEditMode}
            readOnly={!isEditMode}
            rows={4}
            placeholder="Write Business Address"
            className={`w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ${
              !isEditMode 
                ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
                : 'bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
            }`}
          />
        </label>

      </div>
      {/* <SectionHeading title="Operational Details" />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Operating Hours" placeholder="Select Operating Hours" />
        <SelectField label="Delivery Range" placeholder="Select Delivery Range" />
        <TextField label="Average Order Value" placeholder="Enter Average Order Value" />
        <SelectField label="Fulfillment Capability" placeholder="Select Fulfillment Capability" />
      </div> */}

      {/* Uploaded Documents Section - Only visible when Add Field/Section is clicked */}
      {showAdditionalSections && (
        <div>
          <h3 className={`mb-2 text-lg font-bold ${
            isEditMode ? 'text-black' : 'text-pink-500'
          }`}>Uploaded Documents</h3>
          <p className="mb-4 text-sm text-gray-600">Any other documents (optional KYC, GST, etc.)</p>
          
          {/* Document Upload Area */}
          <div className="mb-6 flex items-center gap-3">
            <input
              type="text"
              name="uploadedDocuments"
              value={formData.uploadedDocuments}
              onChange={handleChange}
              disabled={!isEditMode}
              readOnly={!isEditMode}
              placeholder="Upload Documents"
              className={`flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ${
                !isEditMode 
                  ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
                  : 'bg-white text-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
              }`}
            />
            <button 
              type="button"
              disabled={!isEditMode}
              className={`rounded-lg px-6 py-3 text-sm font-semibold text-white ${
                isEditMode 
                  ? 'bg-gray-600 hover:bg-gray-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Upload File
            </button>
          </div>

          {/* Admin Note and Submitted On */}
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-gray-600">Admin Note</span>
              <div className="relative">
                <input
                  type="text"
                  name="adminNote"
                  value={formData.adminNote}
                  onChange={handleChange}
                  disabled={!isEditMode}
                  readOnly={!isEditMode}
                  placeholder="Write Note for Admin"
                  className={`w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm outline-none ${
                    !isEditMode 
                      ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
                      : 'bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
                  }`}
                />
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded ${
                  isEditMode ? 'bg-black' : 'bg-pink-500'
                }`}>
                  <Icon 
                    icon="mdi:check" 
                    className="text-white"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-gray-600">Submitted On</span>
              <div className="relative">
                <input
                  type="text"
                  name="submittedOn"
                  value={formData.submittedOn}
                  onChange={handleChange}
                  disabled={!isEditMode}
                  readOnly={!isEditMode}
                  placeholder="Submitted On"
                  className={`w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm outline-none ${
                    !isEditMode 
                      ? 'bg-gray-50 text-gray-600 cursor-not-allowed' 
                      : 'bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100'
                  }`}
                />
                <Icon 
                  icon="mdi:calendar" 
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                    isEditMode ? 'text-black' : 'text-pink-500'
                  }`}
                  width={20}
                  height={20}
                />
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Section 5 - Only visible when Add Field/Section is clicked */}
      {showAdditionalSections && (
        <div>
          <SectionHeading title="Section 5" isEditMode={isEditMode} />
          <div className="grid gap-4 md:grid-cols-2">
            <TextField 
              label="Fields Title 1" 
              placeholder="Fields Name 1" 
              name="fieldsTitle1"
              value={formData.fieldsTitle1}
              onChange={handleChange}
              disabled={!isEditMode}
            />
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <TextField 
                  label="Fields 1" 
                  placeholder="Fields Name 2" 
                  name="fields1"
                  value={formData.fields1}
                  onChange={handleChange}
                  disabled={!isEditMode}
                />
              </div>
              <button 
                type="button"
                disabled={!isEditMode}
                className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${
                  isEditMode 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Icon icon="mdi:plus" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      )}


      {isEditMode && (
        <div className="flex justify-center pt-4">
          <button 
            onClick={handleSaveChanges}
            className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>
      )}
    
    </div>
  );
};

export default ViewVendorForm;


