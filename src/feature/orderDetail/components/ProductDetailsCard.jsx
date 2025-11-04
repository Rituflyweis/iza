import productImage from '../../../assets/productImage.png';

const ProductDetailsCard = () => {
  const products = [
    {
      name: 'Hydrating Serum',
      size: '50 ml',
      quantity: 1,
      price: '$50',
      coupon: '20% off coupon for new user',
    },
    {
      name: 'Hydrating Serum',
      size: '50 ml',
      quantity: 1,
      price: '$50',
      coupon: '20% off coupon for new user',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-bold text-gray-900 mb-4">Product Details</h3>
      
      <div className="flex items-start gap-4 mb-6">
        <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center overflow-hidden flex-shrink-0">
          <img 
            src={productImage} 
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          {products.map((product, index) => (
            <div key={index} className="text-sm text-gray-700">
              <span className="font-semibold">{index + 1}. Products</span>
              <span className="mx-2">- {product.name}</span>
              <span className="mx-2">|</span>
              <span className="font-semibold">Size</span>
              <span className="mx-2">- {product.size}</span>
              <span className="mx-2">|</span>
              <span className="font-semibold">Quantity</span>
              <span className="mx-2">- {product.quantity}</span>
              <span className="mx-2">|</span>
              <span className="font-semibold">Price</span>
              <span className="mx-2">- {product.price}</span>
              <span className="mx-2">|</span>
              <span className="font-semibold">Coupons & Offers</span>
              <span className="mx-2">- {product.coupon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;

