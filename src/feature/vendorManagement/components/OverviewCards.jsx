
import failedTransaction from '../../../assets/failedTransaction.png';
import { GradientOverviewCards } from '../../../components';

const vendorMetrics = [
  {
    id: 1,
    label: 'Total Vendors',
    value: '4,850 users',
    trend: '+2.05%',
    icon: failedTransaction,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 2,
    label: 'Active Vendors',
    value: '4,320 users',
    trend: '+1.48%',
    icon: failedTransaction,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 3,
    label: 'Blocked Vendors',
    value: '120 users',
    trend: '-0.32%',
    icon: failedTransaction,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 4,
    label: 'Pending Approvals',
    value: '35 applications',
    trend: '+0.84%',
    icon: failedTransaction,
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
];

const OverviewCards = (props) => (
  <GradientOverviewCards
    {...props}
    metrics={vendorMetrics}
    subtitle="Track vendor performance at a glance"
  />
);

export default OverviewCards;

