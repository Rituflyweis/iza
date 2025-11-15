import ReportAnalysisHeader from './components/ReportAnalysisHeader';
import OverviewSection from './components/OverviewSection';
import SalesReportsSection from './components/SalesReportsSection';
import ProductPerformanceSection from './components/ProductPerformanceSection';
import CustomerReportsSection from './components/CustomerReportsSection';
import NewUserSection from './components/NewUserSection';
import ProfitLossSection from './components/ProfitLossSection';
import CategoryPerformanceSection from './components/CategoryPerformanceSection';
import InventoryRestockSection from './components/InventoryRestockSection';
import CampaignROISection from './components/CampaignROISection';
import TopLeastPerformingProductsSection from './components/TopLeastPerformingProductsSection';
import TopProductSalesSection from './components/TopProductSalesSection';
import LeastProductSalesSection from './components/LeastProductSalesSection';

const ReportAnalysis = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      <ReportAnalysisHeader />
      <OverviewSection />
      <SalesReportsSection />
      <ProductPerformanceSection />
      <CustomerReportsSection />
      <NewUserSection />
      <ProfitLossSection />
      <CategoryPerformanceSection />
      <InventoryRestockSection />
      <CampaignROISection />
      <TopLeastPerformingProductsSection />
      <TopProductSalesSection />
      <LeastProductSalesSection />
    </div>
  );
};

export default ReportAnalysis;


