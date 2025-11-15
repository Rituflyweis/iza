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
import CMSContentControlPage from '../pages/CMSContentControlPage';
import AddCMSPostPage from '../pages/AddCMSPostPage';
import AlertsPage from '../pages/AlertsPage';
import AlertSettingsPage from '../pages/AlertSettingsPage';
import CustomerSupportPage from '../pages/CustomerSupportPage';
import TicketDetailPage from '../pages/TicketDetailPage';
import AddFAQPage from '../pages/AddFAQPage';
import AddContactPage from '../pages/AddContactPage';
import ThirdPartyIntegrationPage from '../pages/ThirdPartyIntegrationPage';
import PaymentGatewayPage from '../pages/PaymentGatewayPage';
import AddPaymentGatewayPage from '../pages/AddPaymentGatewayPage';
import ConfigurePaymentGatewayPage from '../pages/ConfigurePaymentGatewayPage';
import ManageSettingsPaymentGatewayPage from '../pages/ManageSettingsPaymentGatewayPage';
import ShippingProviderPage from '../pages/ShippingProviderPage';
import AddShippingPage from '../pages/AddShippingPage';
import ConfigureShippingProviderPage from '../pages/ConfigureShippingProviderPage';
import TrackOrdersShippingProviderPage from '../pages/TrackOrdersShippingProviderPage';
import ReviewsFeedbackPage from '../pages/ReviewsFeedbackPage';
import SettingsPage from '../pages/SettingsPage';
import GeneralSettingsPage from '../pages/GeneralSettingsPage';
import PaymentSettingsPage from '../pages/PaymentSettingsPage';
import TaxRulesPage from '../pages/TaxRulesPage';
import AddTaxRulePage from '../pages/AddTaxRulePage';
import LoyaltyRewardsPage from '../pages/LoyaltyRewardsPage';
import AddLoyaltyProgramPage from '../pages/AddLoyaltyProgramPage';
import AddRewardTierPage from '../pages/AddRewardTierPage';
import AdminRolesPage from '../pages/AdminRolesPage';
import AddAdminRolePage from '../pages/AddAdminRolePage';
import VendorManagementPage from '../pages/VendorManagementPage';
import ViewVendorFormPage from '../pages/ViewVendorFormPage';
import ReportAnalysisPage from '../pages/ReportAnalysisPage';

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

        <Route path="/reward-management" element={<RewardManagementPage />} />
        <Route path="/cms-content" element={<CMSContentControlPage />} />
        <Route path="/cms-content/add" element={<AddCMSPostPage />} />
        {/* <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notification/edit/:id" element={<EditNotificationPage />} />
        <Route path="/notification/new/push" element={<AddPushNotificationPage />} />
        <Route path="/notification/new/email" element={<AddEmailPage />} />
        <Route path="/notification/new/sms" element={<AddSmsPage />} />
        <Route path="/notification/new/whatsapp" element={<AddWhatsappPage />} />
       
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/alerts/settings" element={<AlertSettingsPage />} /> */}
        <Route path="/offers-management" element={<OffersManagementPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/inventory/add" element={<AddInventoryPage />} />
        <Route path="/inventory/edit/:id" element={<AddInventoryPage />} />
        <Route path="/inventory/detail/:id" element={<InventoryDetailPage />} />
        <Route path="/offers-management/add-offer" element={<AddOfferPage />} />
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
        <Route path="/customer-support" element={<CustomerSupportPage />} />
        <Route path="/customer-support/ticket-detail/:id" element={<TicketDetailPage />} />
        <Route path="/customer-support/add-faq" element={<AddFAQPage />} />
        <Route path="/customer-support/edit-faq/:id" element={<AddFAQPage />} />
        <Route path="/customer-support/add-contact" element={<AddContactPage />} />
        <Route path="/customer-support/edit-contact/:id" element={<AddContactPage />} />

        <Route path="/third-party-integration/shipping-provider/track-orders/:id" element={<TrackOrdersShippingProviderPage />} />


        <Route path="/third-party-integration" element={<ThirdPartyIntegrationPage />} />
        <Route path="/third-party-integration/payment-gateway" element={<PaymentGatewayPage />} />
        <Route path="/third-party-integration/payment-gateway/add" element={<AddPaymentGatewayPage />} />
        <Route path="/third-party-integration/payment-gateway/configure/:id" element={<ConfigurePaymentGatewayPage />} />
        <Route path="/third-party-integration/payment-gateway/manage-settings/:id" element={<ManageSettingsPaymentGatewayPage />} />
        <Route path="/third-party-integration/shipping-provider" element={<ShippingProviderPage />} />
        <Route path="/third-party-integration/shipping-provider/add" element={<AddShippingPage />} />
        <Route path="/third-party-integration/shipping-provider/configure/:id" element={<ConfigureShippingProviderPage />} />
        <Route path="/reviews-feedback" element={<ReviewsFeedbackPage />} />
        <Route path="/vendor-management" element={<VendorManagementPage />} />
        <Route path="/vendor-management/form" element={<ViewVendorFormPage />} />
        {/* <Route path="/report-analysis" element={<ReportAnalysisPage />} /> */}
        {/* <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/general" element={<GeneralSettingsPage />} />
        <Route path="/settings/payment" element={<PaymentSettingsPage />} />
        <Route path="/settings/tax-rules" element={<TaxRulesPage />} />
        <Route path="/settings/tax-rules/new" element={<AddTaxRulePage />} />
        <Route path="/settings/loyalty-rewards" element={<LoyaltyRewardsPage />} />
        <Route path="/settings/loyalty-rewards/new/program" element={<AddLoyaltyProgramPage />} />
        <Route path="/settings/loyalty-rewards/new/reward-tier" element={<AddRewardTierPage />} />
        <Route path="/settings/admin-roles" element={<AdminRolesPage />} />
        <Route path="/settings/admin-roles/new" element={<AddAdminRolePage />} /> */}
        {/* Add more routes here as you create new features */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
