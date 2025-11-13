const ProductInfoSection = () => {
  const productData = {
    name: 'Hydrating Serum',
    brand: 'Lorem ipsom',
    category: 'Makeup',
    subCategory1: 'Face',
    subCategory2: 'Face',
    description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    price: '₹200',
    stock: '20',
  };

  return (
    <div className="space-y-4 mb-4">
      <Field label="Product Name" value={productData.name} />
      <Field label="Product Brand" value={productData.brand} />
      <Field label="Category" value={productData.category} />
      <Field label="Sub-Category" value={productData.subCategory1} />
      <Field label="Sub-Category" value={productData.subCategory2} />
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <label className="block text-sm font-semibold text-black/60 mb-2">Description</label>
        <div className="text-right text-sm text-gray-900 leading-relaxed">
          {productData.description}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Price" value={productData.price} />
        <Field label="Stock" value={productData.stock} />
      </div>
    </div>
  );
};

const Field = ({ label, value }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <label className="text-sm font-semibold text-black/60">{label}</label>
      <div className="text-sm text-gray-900 font-medium">{value}</div>
    </div>
  </div>
);

export default ProductInfoSection;

