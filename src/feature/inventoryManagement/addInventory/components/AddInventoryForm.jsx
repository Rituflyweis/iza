import { useState } from 'react';
import { Icon } from '@iconify/react';

const AddInventoryForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    subCategory: '',
    sku: '',
    stock: '',
    expiry: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
        <input name="productName" value={formData.productName} onChange={handleChange} placeholder="Enter product name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="relative">
            <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white">
              <option value="">Select category</option>
              <option value="Skincare">Skincare</option>
              <option value="Hair">Hair</option>
            </select>
            <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Category</label>
          <div className="relative">
            <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white">
              <option value="">Select sub-category</option>
              <option value="Serum">Serum</option>
              <option value="Cleanser">Cleanser</option>
            </select>
            <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
          <input name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
          <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry/PAO*</label>
        <div className="relative">
          <input type="date" name="expiry" value={formData.expiry} onChange={handleChange} className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <Icon icon="mdi:calendar" className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-600" width={20} height={20} />
        </div>
      </div>

      {/* Variants simplified layout */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Variants</span>
          <Icon icon="mdi:chevron-up" width={18} height={18} className="text-gray-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="inline-flex items-center gap-2 mb-2"><input type="checkbox" className="w-4 h-4" /> <span className="text-sm text-gray-700">Size</span></label>
            <div className="space-y-2">
              <input placeholder="50ML" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div>
            <label className="inline-flex items-center gap-2 mb-2"><input type="checkbox" className="w-4 h-4" /> <span className="text-sm text-gray-700">Color Name</span></label>
            <div className="space-y-2">
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Tags</div>
          <div className="grid grid-cols-2 gap-2">
            {['New', 'Featured', 'Limited Edition', 'Custom'].map((t) => (
              <label key={t} className="inline-flex items-center gap-2"><input type="checkbox" className="w-4 h-4" /> <span className="text-sm text-gray-700">{t}</span></label>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Sustainability Tags</div>
          <div className="grid grid-cols-2 gap-2">
            {['Vegan', 'Eco Friendly', 'Eco-friendly', 'Custom'].map((t, i) => (
              <label key={i} className="inline-flex items-center gap-2"><input type="checkbox" className="w-4 h-4" /> <span className="text-sm text-gray-700">{t}</span></label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2.5 rounded-md text-sm">Add Inventory</button>
      </div>
    </div>
  );
};

export default AddInventoryForm;














