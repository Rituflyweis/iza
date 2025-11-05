import { useState } from 'react';
import { Icon } from '@iconify/react';

const InventoryDetailForm = () => {
  const [data] = useState({
    productName: 'Hydrating Serum',
    category: 'Skincare',
    subCategory: 'Serum',
    sku: 'HS30',
    stock: '150',
    expiry: '2026-12-31',
  });

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
        <input value={data.productName} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="relative">
            <input value={data.category} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Category</label>
          <div className="relative">
            <input value={data.subCategory} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
          <input value={data.sku} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
          <input value={data.stock} readOnly className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-50" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry/PAO*</label>
        <div className="relative">
          <input type="date" value={data.expiry} readOnly className="date-input w-full px-4 pr-10 py-2 border border-gray-200 rounded-md bg-gray-50" />
          <Icon icon="mdi:calendar" className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-600" width={20} height={20} />
        </div>
      </div>

      {/* Variants/Tags sections simplified */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Variants</div>
          <div className="grid grid-cols-2 gap-2">
            <input value="30ML" readOnly className="px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
            <input value="50ML" readOnly className="px-3 py-2 border border-gray-200 rounded-md bg-gray-50" />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Sustainability Tags</div>
          <div className="grid grid-cols-2 gap-2">
            {['Vegan', 'Eco Friendly'].map((t) => (
              <label key={t} className="inline-flex items-center gap-2"><input type="checkbox" defaultChecked disabled className="w-4 h-4" /> <span className="text-sm text-gray-700">{t}</span></label>
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

export default InventoryDetailForm;



