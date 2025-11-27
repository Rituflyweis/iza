const ProductDetailsCard = ({ orderData }) => {
  const products = orderData?.products || [];

  // Get product image for each product
  const getProductImage = (product) => {
    // Try to get image from product.productId.productImages first
    const productImages = product?.productId?.productImages || product?.productImages || [];
    
    if (productImages.length > 0 && productImages[0]?.image) {
      return productImages[0].image;
    }
    
    // Fallback to default placeholder
    return 'https://via.placeholder.com/96?text=No+Image';
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-bold text-gray-900 mb-4">Product Details</h3>
      
      {/* Product Details with Individual Images */}
      <div className="space-y-4">
        {products.length > 0 ? (
          products.map((product, index) => {
            const productName = product?.productId?.name || product?.name || 'Product';
            const size = product?.size || product?.productId?.size || '-';
            const quantity = product?.quantity || 0;
            const price = product?.price || product?.productId?.price || 0;
            const coupon = product?.coupon || product?.discount || '-';
            const productImage = getProductImage(product);
            
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Product Image - Circular for each product */}
                <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src={productImage} 
                    alt={productName}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/96?text=No+Image';
                    }}
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 text-sm text-gray-700">
                  <span className="font-semibold">{index + 1}. Products</span>
                  <span className="mx-2 capitalize">- {productName}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Size</span>
                  <span className="mx-2">- {size}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Quantity</span>
                  <span className="mx-2">- {quantity}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Price</span>
                  <span className="mx-2">- ₹{price}</span>
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Coupons & Offers</span>
                  <span className="mx-2">- {coupon}</span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-sm text-gray-700">No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;

