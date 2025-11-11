import { Icon } from '@iconify/react';

const SectionHeading = ({ title }) => (
  <div className="mb-4">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-500">
      {title}
    </h3>
  </div>
);

const TextField = ({ label, placeholder }) => (
  <label className="flex flex-col gap-2">
    <span className="text-xs font-semibold text-gray-600">{label}</span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
    />
  </label>
);

const SelectField = ({ label, placeholder }) => (
  <label className="flex flex-col gap-2">
    <span className="text-xs font-semibold text-gray-600">{label}</span>
    <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500 outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100">
      <option value="">{placeholder}</option>
    </select>
  </label>
);

const ViewVendorForm = () => {
  return (
    <div className="space-y-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <button className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900">
            <Icon icon="mdi:chevron-left" width={20} height={20} />
            View Vendor Form
          </button>
        </div>
        <button className="rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600">
          Edit Form
        </button>
      </div>

      <SectionHeading title="Submitted By" />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="User Full Name" placeholder="User Full Name" />
        <TextField label="User ID / Email" placeholder="User ID / Email" />
      </div>

      <SectionHeading title="Vendor (Company) Details" />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Vendor / Company Name" placeholder="Enter Vendor / Company Name" />
        <SelectField label="Business Type" placeholder="Select Business Type" />
        <SelectField label="Business Category" placeholder="Select Business Category" />
        <TextField label="Product Categories" placeholder="e.g Skincare, Retail, Healthcare" />
        <TextField label="Business Location" placeholder="Select Location" />
        <TextField label="Year Established" placeholder="Enter Year Established" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-xs font-semibold text-gray-600">Business Description</span>
          <textarea
            rows={4}
            placeholder="Write Business Description (200-300 Words)"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
          />
        </label>
        <TextField label="Website / Instagram" placeholder="Link 1" />
        <TextField label=" " placeholder="Link 2" />
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

      <SectionHeading title="Contact Information" />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="Official Email" placeholder="Enter Official Email" />
        <TextField label="Official Phone Number" placeholder="Enter Official Phone Number" />
        <TextField label="Alternate Email" placeholder="Enter Alternate Email" />
        <TextField label="Alternate Phone Number" placeholder="Enter Alternate Phone Number" />
      </div>

      <SectionHeading title="Operational Details" />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField label="Operating Hours" placeholder="Select Operating Hours" />
        <SelectField label="Delivery Range" placeholder="Select Delivery Range" />
        <TextField label="Average Order Value" placeholder="Enter Average Order Value" />
        <SelectField label="Fulfillment Capability" placeholder="Select Fulfillment Capability" />
      </div>

      <SectionHeading title="Documents Submitted" />
      <div className="space-y-3">
        {[
          'Business Registration Certificate',
          'Tax Identification Document',
          'Bank Account Proof',
          'Compliance Certificates',
        ].map((doc) => (
          <div
            key={doc}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600"
          >
            <span>{doc}</span>
            <button className="text-xs font-semibold text-pink-500 hover:text-pink-600">
              View
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-pink-100 bg-pink-50 p-5 text-sm text-pink-600">
        <p className="font-semibold">Notes &amp; Approvals</p>
        <textarea
          rows={3}
          placeholder="Add internal notes about this vendor..."
          className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
        />
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-pink-600">Application Status:</span>
            <select className="rounded-full border border-pink-300 bg-white px-3 py-1 text-xs font-semibold text-pink-600 outline-none focus:border-pink-500">
              <option>Pending Review</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <button className="rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVendorForm;

