import { Icon } from '@iconify/react';
import { useState } from 'react';

const ProductFormSection = () => {
  const [form, setForm] = useState({
    name: 'Hydrating Serum',
    brand: 'Lorem Ipsum',
    category: 'Makeup',
    subCategory: 'Face',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    price: '₹999',
    stock: '#999',
  });
  const [isVisible, setIsVisible] = useState(true);

  const handle = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <div className="space-y-4">
        <Field label="Product Name" value={form.name} onChange={handle('name')} />
        <Field label="Brand Name" value={form.brand} onChange={handle('brand')} />
        
        <div>
          <Label text="Category" />
          <select
            className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            value={form.category}
            onChange={handle('category')}
          >
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
          </select>
        </div>

        <div>
          <Label text="Sub-Category" />
          <select
            className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            value={form.subCategory}
            onChange={handle('subCategory')}
          >
            <option value="Face">Face</option>
            <option value="Body">Body</option>
          </select>
        </div>

        <div>
          <Label text="Description" />
          <textarea
            value={form.description}
            onChange={handle('description')}
            rows={4}
            className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Price" value={form.price} onChange={handle('price')} />
          <Field label="Stock" value={form.stock} onChange={handle('stock')} />
        </div>

        <div className="flex items-center justify-between pt-2">
          <Label text="Product Visibility" />
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isVisible ? 'bg-[#F8069D]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isVisible ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Label = ({ text }) => (
  <label className="block text-sm font-semibold text-gray-600 mb-2">{text}</label>
);

const Field = ({ label, value, onChange }) => (
  <div>
    <Label text={label} />
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
    />
  </div>
);

export default ProductFormSection;

