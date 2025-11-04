const ProductInfoSection = () => {
  const productData = {
    name: 'Hydrating Serum',
    brand: 'Lorem ipsom',
    category: 'Makeup',
    subCategory1: 'Face',
    subCategory2: 'Face',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    price: '2200',
    stock: '20',
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <div className="space-y-4">
        <Field label="Product Name" value={productData.name} />
        <Field label="Product Brand" value={productData.brand} />
        <Field label="Category" value={productData.category} />
        <Field label="Sub-Category" value={productData.subCategory1} />
        <Field label="Sub-Category" value={productData.subCategory2} />
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Description</label>
          <textarea
            value={productData.description}
            readOnly
            className="w-full border-2 border-gray-200 rounded-lg p-3 text-sm bg-gray-50 text-gray-700"
            rows={4}
          />
        </div>
        <Field label="Price" value={productData.price} />
        <Field label="Stock" value={productData.stock} />
      </div>
    </div>
  );
};

const Field = ({ label, value }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-600 mb-2">{label}</label>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm bg-gray-50 text-gray-700"
    />
  </div>
);

export default ProductInfoSection;

