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
import TransactionManagementPage from '../pages/TransactionManagementPage';
import VideoManagementPage from '../pages/VideoManagementPage';
import AddVideoPage from '../pages/AddVideoPage';
import OffersManagementPage from '../pages/OffersManagementPage';
import RewardManagementPage from '../pages/RewardManagementPage';
import NotificationPage from '../pages/NotificationPage';
import EditNotificationPage from '../pages/EditNotificationPage';
import AddPushNotificationPage from '../pages/AddPushNotificationPage';
import AddEmailPage from '../pages/AddEmailPage';
import AddSmsPage from '../pages/AddSmsPage';
import AddWhatsappPage from '../pages/AddWhatsappPage';
import InventoryManagementPage from '../pages/InventoryManagementPage';
import AddInventoryPage from '../pages/AddInventoryPage';
import InventoryDetailPage from '../pages/InventoryDetailPage';
import AddOfferPage from '../pages/AddOfferPage';
import AlertsPage from '../pages/AlertsPage';
import AlertSettingsPage from '../pages/AlertSettingsPage';

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
        <Route path="/transaction-list" element={<TransactionManagementPage />} />
        <Route path="/video-management" element={<VideoManagementPage />} />
        <Route path="/video-management/add-video" element={<AddVideoPage />} />
        {/* <Route path="/offers-management" element={<OffersManagementPage />} />
        <Route path="/reward-management" element={<RewardManagementPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notification/edit/:id" element={<EditNotificationPage />} />
        <Route path="/notification/new/push" element={<AddPushNotificationPage />} />
        <Route path="/notification/new/email" element={<AddEmailPage />} />
        <Route path="/notification/new/sms" element={<AddSmsPage />} />
        <Route path="/notification/new/whatsapp" element={<AddWhatsappPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/inventory/add" element={<AddInventoryPage />} />
        <Route path="/inventory/edit/:id" element={<AddInventoryPage />} />
        <Route path="/inventory/detail/:id" element={<InventoryDetailPage />} />
        <Route path="/offers-management/add-offer" element={<AddOfferPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/alerts/settings" element={<AlertSettingsPage />} /> */}
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
