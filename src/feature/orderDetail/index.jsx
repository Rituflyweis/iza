import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailHeader from './components/OrderDetailHeader';
import CustomerDetailsCard from './components/CustomerDetailsCard';
import OrderProgressCard from './components/OrderProgressCard';
import ProductDetailsCard from './components/ProductDetailsCard';
import OrderDetailsCard from './components/OrderDetailsCard';
import PaymentDetailsCard from './components/PaymentDetailsCard';
import DeliveryReturnCard from './components/DeliveryReturnCard';
import axiosInstance from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { showLoader, hideLoader } from '../../store/slices/loaderSlice';
import useToast from '../../hooks/useToast';

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { showError } = useToast();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchOrderDetails(id);
    }
  }, [id]);

  const fetchOrderDetails = async (orderId) => {
    try {
      setLoading(true);
      dispatch(showLoader('Loading order details...'));

      const response = await axiosInstance.get(`/getProductOrderbyId/${orderId}`);
      
      const orderDetail = response.data?.data || response.data;
      setOrderData(orderDetail);
    } catch (error) {
      const errorMessage =
        error.response?.data?.data?.message ||
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to load order details. Please try again.';
      showError(errorMessage);
      console.error('Error fetching order details:', error);
      setOrderData(null);
    } finally {
      setLoading(false);
      dispatch(hideLoader());
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="p-6 text-center">
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="bg-white min-h-screen">
        <div className="p-6 text-center">
          <p>No order data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6">
        <OrderDetailHeader orderData={orderData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <CustomerDetailsCard orderData={orderData} />
          <OrderProgressCard orderData={orderData} />
        </div>
        
        <ProductDetailsCard orderData={orderData} />
        <OrderDetailsCard orderData={orderData} />
        <PaymentDetailsCard orderData={orderData} />
        <DeliveryReturnCard orderData={orderData} />
      </div>
    </div>
  );
};

export default OrderDetail;

