import OverviewMetrics from './components/OverviewMetrics';
import TopSellingProducts from './components/TopSellingProducts';
import RecentOrders from './components/RecentOrders';
import TrendingItemsCard from './components/TrendingItemsCard';
import CustomersCard from './components/CustomersCard';
import InventoryStatusCard from './components/InventoryStatusCard';
import CustomerDemographics from './components/CustomerDemographics';
import EngagementAnalytics from './components/EngagementAnalytics';
import ConversionAndActivities from './components/ConversionAndActivities';
import { Box } from '@mui/material';

const DashboardOverview = () => {
  return (
    // <div className=" w-full max-w-6xl space-y-8 px-4 py-8">
    <Box className = "space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Track your sales and performance of your strategy
        </p>
      </div>

      <OverviewMetrics />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)] md:grid-cols-[2fr_1fr]">
        <TopSellingProducts />
        <RecentOrders />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)] md:grid-cols-[2fr_1fr]">
        <TrendingItemsCard />
        <CustomersCard />
      </div>

      <InventoryStatusCard />

      <CustomerDemographics />

      <EngagementAnalytics />

      <ConversionAndActivities />
    </Box>
  );
};

export default DashboardOverview;


