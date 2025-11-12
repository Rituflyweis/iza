import { useState } from 'react';
import { Icon } from '@iconify/react';

const AddOfferForm = () => {
  const [formData, setFormData] = useState({
    offerTitle: '',
    offerCode: '',
    applyTo: '', // product | category | other
    selectedItem: '',
    discountType: '', // percentage | flat
    discountValue: '',
    minimumPurchase: '',
    customerType: '',
    bannerText: '',
    description: '',
    startDate: '',
    expiryDate: '',
    addedOn: '',
    status: '', // Active | Inactive
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) setThumbnailFile(file);
  };

  const handleThumbnailDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setThumbnailFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="space-y-6">
      {/* Offer Title / Offer Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title*</label>
          <input
            type="text"
            name="offerTitle"
            value={formData.offerTitle}
            onChange={handleInputChange}
            placeholder="Enter Offer Title*"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Offer Code</label>
          <input
            type="text"
            name="offerCode"
            value={formData.offerCode}
            onChange={handleInputChange}
            placeholder="Enter Offer Code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Apply To */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Apply To*</label>
        <div className="relative">
          <select
            name="applyTo"
            value={formData.applyTo}
            onChange={(e) => {
              handleInputChange(e);
              setFormData((prev) => ({ ...prev, selectedItem: '' }));
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Apply Offer To*</option>
            <option value="product">Product</option>
            <option value="category">Category</option>
            <option value="other">Other</option>
          </select>
          <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
        </div>
      </div>

      {/* Select Product/Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Product/Category*</label>
        <div className="relative">
          <select
            name="selectedItem"
            value={formData.selectedItem}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">{`Select ${formData.applyTo ? formData.applyTo.charAt(0).toUpperCase()+formData.applyTo.slice(1) : 'Product/Category'} (Based on "Apply To" selection)`}</option>
            <option value="sample-1">Sample 1</option>
            <option value="sample-2">Sample 2</option>
          </select>
          <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
        </div>
      </div>

      {/* Discount Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type*</label>
        <div className="relative">
          <select
            name="discountType"
            value={formData.discountType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select Discount Type*</option>
            <option value="percentage">Percentage</option>
            <option value="flat">Flat</option>
          </select>
          <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
        </div>
      </div>

      {/* Discount Value */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value*</label>
        <input
          type="text"
          name="discountValue"
          value={formData.discountValue}
          onChange={handleInputChange}
          placeholder="Enter Discount Value"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Minimum Purchase */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Purchase</label>
        <input
          type="text"
          name="minimumPurchase"
          value={formData.minimumPurchase}
          onChange={handleInputChange}
          placeholder="Enter Minimum Purchase Cost"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Customer Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Customer type</label>
        <input
          type="text"
          name="customerType"
          value={formData.customerType}
          onChange={handleInputChange}
          placeholder="Enter VIP or New"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Banner Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Banner Text</label>
        <input
          type="text"
          name="bannerText"
          value={formData.bannerText}
          onChange={handleInputChange}
          placeholder="Enter Banner Text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Upload Thumbnail / Cover */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Thumbnail / Cover</label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleThumbnailDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors cursor-pointer"
        >
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleThumbnailUpload}
            className="hidden"
            id="offer-thumb-upload"
          />
          <label htmlFor="offer-thumb-upload" className="cursor-pointer">
            <Icon icon="mdi:image" className="mx-auto mb-3 text-pink-600" width={48} height={48} />
            <p className="text-sm text-gray-600"><span className="text-blue-600">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">.jpg, .png Required</p>
            {thumbnailFile && (<p className="text-sm text-green-600 mt-2">{thumbnailFile.name}</p>)}
          </label>
        </div>
      </div>

      {/* Offer Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Offer Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Offer Description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Start / Expiry Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <div className="relative">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              placeholder="Select offer Start Date"
              className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Icon icon="mdi:calendar" className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-600 pointer-events-none" width={20} height={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
          <div className="relative">
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="Select offer Expire Date"
              className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Icon icon="mdi:calendar" className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-600 pointer-events-none" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Status & Added On */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="mdi:check-circle" width={18} height={18} className="text-green-500" />
            <label className="block text-sm font-medium text-gray-700">Status</label>
          </div>
          <div>
            <label className="flex items-center gap-2 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={formData.status === 'Active'}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.checked ? 'Active' : '' }))}
                className="w-4 h-4 border border-gray-300 rounded text-pink-600 focus:ring-pink-500 focus:ring-1"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
            <hr className="border-gray-200 my-1" />
            <label className="flex items-center gap-2 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={formData.status === 'Inactive'}
                onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.checked ? 'Inactive' : '' }))}
                className="w-4 h-4 border border-gray-300 rounded text-pink-600 focus:ring-pink-500 focus:ring-1"
              />
              <span className="text-sm text-gray-700">Inactive</span>
            </label>
          </div>
        </div>

        {/* Added On */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Added On</label>
          <div className="relative">
            <input
              type="date"
              name="addedOn"
              value={formData.addedOn}
              onChange={handleInputChange}
              placeholder="Added On"
              className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Icon icon="mdi:calendar" className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-600 pointer-events-none" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-4">
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2.5 rounded-md text-sm">+ Add New Offer</button>
      </div>
    </div>
  );
};

export default AddOfferForm;












