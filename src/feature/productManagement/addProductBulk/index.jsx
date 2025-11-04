import { useState } from "react";
import { Icon } from "@iconify/react";
import productImage from "../../../assets/productImage.png";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    subcategory: "",
    seo: "",
    crossSelling: "",
    description: "",
    price: "",
    stock: "",
    expiry: "",
    ingredients: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [organicCert, setOrganicCert] = useState(null);
  const [variants, setVariants] = useState([{ size: "", color: "" }]);
const navigate = useNavigate()
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

  return (
    <div className="p-6 bg-white rounded-lg ">
      {/* Header */}
      <div className="flex items-center justify-between mb-">
        <div className="flex items-center gap-1">
         <button
          onClick={() => navigate('/product-management')}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} className="text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">Add New Product</h2></div>
      
      </div>
      <div className="mb-4">
        <img src={productImage}/>
      </div>

      <form className="space-y-5">
        {/* Product Name */}
        <div>
          <Label text="Product Name" />
          <Input value={form.name} onChange={handle("name")} placeholder="Write Product Name" />
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

        {/* SEO Metadata */}
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

        {/* Cross-Selling */}
        <div>
          <Label text="Cross-Selling" />
          <Input
            value={form.crossSelling}
            onChange={handle("crossSelling")}
            placeholder="Link related or complementary items"
          />
        </div>

        {/* Description */}
        <div>
          <Label text="Description" />
          <textarea
            value={form.description}
            onChange={handle("description")}
            rows={4}
            placeholder="Write Product Description"
            className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
          />
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

        {/* Expiry Date */}
        <div>
          <Label text="Expiry Date" />
          <Input type="date" value={form.expiry} onChange={handle("expiry")} />
        </div>

        {/* Organic Certification */}
        <div>
          <Label text="Organic Certification" />
          <DropZone
            id="org-cert"
            onDrop={onDrop(setOrganicCert)}
            onFile={onFile(setOrganicCert)}
            file={organicCert}
          />
        </div>

        {/* Variants */}
        <div>
          <Label text="Variants" />
          <div className="space-y-3">
            {variants.map((v, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Size"
                    value={v.size}
                    onChange={(e) => handleVariantChange(i, "size", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={addVariant}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
                  >
                    <Icon icon="mdi:plus" width={18} height={18} className="text-gray-700" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Color Name"
                    value={v.color}
                    onChange={(e) => handleVariantChange(i, "color", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={addVariant}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
                  >
                    <Icon icon="mdi:plus" width={18} height={18} className="text-gray-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <Label text="Ingredients" />
          <textarea
            value={form.ingredients}
            onChange={handle("ingredients")}
            rows={3}
            placeholder="List ingredients"
            className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
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
            className="w-full flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium text-sm transition"
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
      <p className="text-xs text-gray-400">JPG, PNG less than 1MB</p>
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
