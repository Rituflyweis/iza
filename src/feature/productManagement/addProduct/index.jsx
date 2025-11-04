import { useState } from "react";
import { Icon } from "@iconify/react";
import productImage from "../../../assets/productImage.png";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    subcategory: "",
    // seo: "", // Commented for single product
    // crossSelling: "", // Commented for single product
    description: "",
    price: "",
    stock: "",
    // expiry: "", // Commented for single product
    ingredients: "",
  });

  const [imageFile, setImageFile] = useState(null);
  // const [organicCert, setOrganicCert] = useState(null); // Commented for single product
  const [variants, setVariants] = useState([{ size: "", color: "" }]);
  const navigate = useNavigate();
  
  const handle = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onFile = (setter) => (e) => {
    if (e.target.files?.[0]) setter(e.target.files[0]);
  };

  const onDrop = (setter) => (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) setter(e.dataTransfer.files[0]);
  };

  const handleVariantChange = (i, field, value) => {
    setVariants((prev) =>
      prev.map((v, idx) => (idx === i ? { ...v, [field]: value } : v))
    );
  };

  const addVariant = () => {
    setVariants((prev) => [...prev, { size: "", color: "" }]);
  };

  const appendMarkdown = (token) => {
    setForm((prev) => ({ ...prev, description: prev.description + token }));
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate('/product-management')}
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-700" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Add New Product</h2>
        </div>
        <button className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          Save
        </button>
      </div>
      
      <div className="mb-4 flex justify-center">
        <img src={productImage} alt="Product" className="w-32 h-32 rounded-full object-cover" />
      </div>

      <form className="space-y-5">
        {/* Product Name */}
        <div>
          <Label text="Product Name" />
          <Input value={form.name} onChange={handle("name")} placeholder="Enter Product Name" />
        </div>

        {/* Category */}
        <div>
          <Label text="Category" />
          <select
            className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            value={form.category}
            onChange={handle("category")}
          >
            <option value="">Select category</option>
            <option value="Skincare">Skincare</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <Label text="Sub-Category" />
          <select
            className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            value={form.subcategory}
            onChange={handle("subcategory")}
          >
            <option value="">Select sub-category</option>
            <option value="Face">Face</option>
          </select>
        </div>

        {/* SEO Metadata - Commented for single product */}
        {/* 
        <div>
          <Label text="SEO & Metadata" />
          <textarea
            value={form.seo}
            onChange={handle("seo")}
            rows={3}
            placeholder="Add meta tags, keywords, titles, schema"
            className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
          />
        </div>
        */}

        {/* Cross-Selling - Commented for single product */}
        {/* 
        <div>
          <Label text="Cross-Selling" />
          <Input
            value={form.crossSelling}
            onChange={handle("crossSelling")}
            placeholder="Link related or complementary items"
          />
        </div>
        */}

        {/* Description with Rich Text Toolbar */}
        <div>
          <Label text="Description" />
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-2 py-1 border-b border-gray-200 flex gap-1">
              <button
                type="button"
                onClick={() => appendMarkdown('**bold** ')}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:format-bold" width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={() => appendMarkdown('_italic_ ')}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:format-italic" width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={() => appendMarkdown('• ')}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:format-list-bulleted" width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={() => appendMarkdown('1. ')}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:format-list-numbered" width={18} height={18} />
              </button>
              <button
                type="button"
                onClick={() => appendMarkdown('[link](https://) ')}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:link-variant" width={18} height={18} />
              </button>
            </div>
            <textarea
              value={form.description}
              onChange={handle("description")}
              rows={4}
              placeholder="Enter Product Description"
              className="w-full border-none rounded-none p-3 text-sm focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Product Image */}
        <div>
          <Label text="Product Image" />
          <DropZone
            id="prod-image"
            onDrop={onDrop(setImageFile)}
            onFile={onFile(setImageFile)}
            file={imageFile}
          />
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="Price" />
            <Input value={form.price} onChange={handle("price")} placeholder="₹0" />
          </div>
          <div>
            <Label text="Stock" />
            <Input value={form.stock} onChange={handle("stock")} placeholder="0" />
          </div>
        </div>

        {/* Expiry Date - Commented for single product */}
        {/* 
        <div>
          <Label text="Expiry Date" />
          <Input type="date" value={form.expiry} onChange={handle("expiry")} />
        </div>
        */}

        {/* Organic Certification - Commented for single product */}
        {/* 
        <div>
          <Label text="Organic Certification" />
          <DropZone
            id="org-cert"
            onDrop={onDrop(setOrganicCert)}
            onFile={onFile(setOrganicCert)}
            file={organicCert}
          />
        </div>
        */}

        {/* Variants */}
        <div>
          <Label text="Variants" />
          <select
            className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            value={form.variants || ""}
            onChange={(e) => setForm((prev) => ({ ...prev, variants: e.target.value }))}
          >
            <option value="">Select variant</option>
            <option value="Size">Size</option>
            <option value="Color">Color</option>
          </select>
        </div>

        {/* Ingredients */}
        <div>
          <Label text="Ingredients" />
          <Input
            value={form.ingredients}
            onChange={handle("ingredients")}
            placeholder="Enter ingredients"
          />
        </div>

        {/* Tags + Sustainability Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label text="Tags" />
            <CheckboxGroup options={["New", "Featured", "Limited Edition", "Custom"]} />
          </div>
          <div>
            <Label text="Sustainability Tags" />
            <CheckboxGroup options={["Vegan", "Eco-Friendly", "Cruelty Free"]} />
          </div>
        </div>

        {/* Add Product Button */}
        <div>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-[#F8069D] hover:bg-[#C1057D] text-white py-3 rounded-lg font-medium text-sm transition"
          >
            <Icon icon="mdi:plus-circle-outline" width={18} height={18} className="mr-2" />
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

/* ---- Small Reusable Components ---- */
const Label = ({ text }) => (
  <label className="block text-sm font-semibold text-gray-600 mb-1">{text}</label>
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
      <p className="text-xs text-gray-400">JPG, GIF, PNG. Max size less than 1MB</p>
      {file && <p className="text-xs text-green-600 mt-2">Selected: {file.name}</p>}
    </label>
  </div>
);

const CheckboxGroup = ({ options }) => (
  <div className="flex flex-col space-y-2">
    {options.map((opt) => (
      <label key={opt} className="flex items-center text-sm text-gray-700">
        <input type="checkbox" className="mr-2 accent-pink-600" /> {opt}
      </label>
    ))}
  </div>
);

export default AddProduct;
