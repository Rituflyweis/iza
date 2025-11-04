import OrderDetailHeader from './components/OrderDetailHeader';
import CustomerDetailsCard from './components/CustomerDetailsCard';
import OrderProgressCard from './components/OrderProgressCard';
import ProductDetailsCard from './components/ProductDetailsCard';
import OrderDetailsCard from './components/OrderDetailsCard';
import PaymentDetailsCard from './components/PaymentDetailsCard';
import DeliveryReturnCard from './components/DeliveryReturnCard';

const OrderDetail = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="p-6">
        <OrderDetailHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <CustomerDetailsCard />
          <OrderProgressCard />
        </div>
        
        <ProductDetailsCard />
        <OrderDetailsCard />
        <PaymentDetailsCard />
        <DeliveryReturnCard />
      </div>
    </div>
  );
};

export default OrderDetail;

