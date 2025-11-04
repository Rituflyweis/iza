import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import OTPPage from '../pages/OTPPage';
import SignUpPage from '../pages/SignUpPage';
import DashboardPage from '../pages/DashboardPage';
import UserManagementPage from '../pages/UserManagementPage';
import UserDetailPage from '../pages/UserDetailPage';
import UserOrderHistoryPage from '../pages/UserOrderHistoryPage';
import UserWishlistPage from '../pages/UserWishlistPage';
import UserActivityLogsPage from '../pages/UserActivityLogsPage';
import UserTicketRaisedPage from '../pages/UserTicketRaisedPage';
import UserTicketDetailsPage from '../pages/UserTicketDetailsPage';
import UserCommunicationHistoryPage from '../pages/UserCommunicationHistoryPage';
import UserCommunicationDetailPage from '../pages/UserCommunicationDetailPage';
import UserLoyaltyPointsPage from '../pages/UserLoyaltyPointsPage';
import UserReferralHistoryPage from '../pages/UserReferralHistoryPage';
import CreateUserPage from '../pages/CreateUserPage';
import ProductManagementPage from '../pages/ProductManagementPage';
import AddProductPage from "../pages/AddProductPage"
import AddProductBulkPage from '../pages/AddProductBulkPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import EditProductPage from '../pages/EditProductPage';
import OrderManagementPage from '../pages/OrderManagementPage';
import OrderDetailPage from '../pages/OrderDetailPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OTPPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/product-management" element={<ProductManagementPage />} />
        <Route path="/product-management/add-bulk" element={<AddProductBulkPage />} />
        <Route path="/product-management/add-product" element={<AddProductPage />} />
        <Route path="/product-management/detail/:id" element={<ProductDetailPage />} />
        <Route path="/product-management/edit/:id" element={<EditProductPage />} />
        <Route path="/order-management" element={<OrderManagementPage />} />
        <Route path="/order-management/detail/:id" element={<OrderDetailPage />} />
        <Route path="/user-detail/:id" element={<UserDetailPage />} />
        <Route path="/user-detail/:id/order-history" element={<UserOrderHistoryPage />} />
        <Route path="/user-detail/:id/wishlist" element={<UserWishlistPage />} />
        <Route path="/user-detail/:id/activity-logs" element={<UserActivityLogsPage />} />
        <Route path="/user-detail/:id/tickets" element={<UserTicketRaisedPage />} />
        <Route path="/user-detail/:id/tickets/:ticketId" element={<UserTicketDetailsPage />} />
        <Route path="/user-detail/:id/communication" element={<UserCommunicationHistoryPage />} />
        <Route path="/user-detail/:id/communication/:commId" element={<UserCommunicationDetailPage />} />
        <Route path="/user-detail/:id/loyalty" element={<UserLoyaltyPointsPage />} />
        <Route path="/user-detail/:id/referrals" element={<UserReferralHistoryPage />} />
        
        {/* Add more routes here as you create new features */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
