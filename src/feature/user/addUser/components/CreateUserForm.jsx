import { useState } from "react";
import { Icon } from "@iconify/react";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    name: "Merle Willson",
    userId: "123345",
    phoneNumber: "555-254-1209",
    assignRole: "Admin",
    gender: "Male",
    age: "26",
    email: "abosgmail.com",
  });
  const [kycFile, setKycFile] = useState(null);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setKycFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) setKycFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Profile Image */}
      <div className="flex justify-center md:justify-start">
        <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Name">
          <Input value={formData.name} onChange={handleChange("name")} />
        </Field>

        <Field label="User ID">
          <Input value={formData.userId} onChange={handleChange("userId")} />
        </Field>

        <Field label="Phone Number">
          <Input
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </Field>

        <Field label="Assign Role">
          <Select value={formData.assignRole} onChange={handleChange("assignRole")}>
            <option value="Admin">Admin</option>
            <option value="Order Manager">Order Manager</option>
            <option value="Support Staff">Support Staff</option>
            <option value="Inventory Manager">Inventory Manager</option>
          </Select>
        </Field>

        <Field label="Gender">
          <Select value={formData.gender} onChange={handleChange("gender")}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </Field>

        <Field label="Age">
          <Input
            type="number"
            value={formData.age}
            onChange={handleChange("age")}
          />
        </Field>

        {/* Full-width KYC Section */}
        <div className="md:col-span-2">
          <Field label="KYC & Verification">
            <DropZone
              id="kyc-upload"
              onDrop={handleDrop}
              onFile={handleFileChange}
              file={kycFile}
            />
          </Field>
        </div>

        {/* Full-width Email */}
        <div className="md:col-span-2">
          <Field label="Email">
            <Input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </Field>
        </div>
      </div>
    </div>
  );
};

/* --- Reusable Small Components --- */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-600 mb-1">
      {label}
    </label>
    {children}
  </div>
);

const Input = ({ type = "text", value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
  />
);

const Select = ({ value, onChange, children }) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
  >
    {children}
  </select>
);

const DropZone = ({ id, onDrop, onFile, file }) => (
  <div
    onDrop={onDrop}
    onDragOver={(e) => e.preventDefault()}
    className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-pink-400 bg-white cursor-pointer transition"
  >
    <input id={id} type="file" className="hidden" onChange={onFile} />
    <label htmlFor={id} className="cursor-pointer flex flex-col items-center">
      <Icon icon="mdi:file-upload-outline" width={48} height={48} className="text-gray-400 mb-3" />
      <p className="text-sm text-gray-600">
        <span className="text-pink-600 underline">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-400">JPG, CSV, Excel less than 1MB</p>
      {file && (
        <p className="text-xs text-green-600 mt-2">Selected: {file.name}</p>
      )}
    </label>
  </div>
);

export default CreateUserForm;
