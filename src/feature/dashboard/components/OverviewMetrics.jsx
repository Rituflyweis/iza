import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientOverviewCards, AddProductChooser, FilterOffcanvas } from '../../../components';
import OverviewFilterBody from './OverviewFilterBody';
import coin from '../../../assets/coin.png';
import shipments from '../../../assets/shipments.png';
import graph from '../../../assets/graph.png';
import failedTransaction from '../../../assets/failedTransaction.png';

const dashboardMetrics = [
  {
    id: 'sales',
    label: 'Total Sales',
    value: '15,250 orders',
    trend: '+2.06%',
    icon: graph,
    gradient: 'linear-gradient(135deg, #FB3AA9, #FF6B98)',
  },
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '₹ 7,20,000',
    trend: '+2.06%',
    icon: coin,
    gradient: 'linear-gradient(135deg, #FF7D9E, #FF2EBE)',
  },
  {
    id: 'activeUsers',
    label: 'Active Users',
    value: '4,850 users',
    trend: '+2.06%',
    icon: failedTransaction,
    gradient: 'linear-gradient(135deg, #FB3AA9, #FF6B98)',
  },
  {
    id: 'traffic',
    label: 'Site Traffic',
    value: '18,000 visits',
    trend: '+2.06%',
    icon: shipments,
    gradient: 'linear-gradient(135deg, #FF7D9E, #FF2EBE)',
  },
];

const OverviewMetrics = () => {
  const [activeFilter, setActiveFilter] = useState('Today');
  const [chooserOpen, setChooserOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    months: [],
    year: '',
    startDate: '',
    endDate: '',
  });
  const navigate = useNavigate();

  const openChooser = () => setChooserOpen(true);
  const closeChooser = () => setChooserOpen(false);
  const openFilter = () => setFilterOpen(true);
  const closeFilter = () => setFilterOpen(false);

  const goToAddBulkProduct = () => {
    closeChooser();
    navigate('/product-management/add-bulk');
  };
  const goToAddProduct = () => {
    closeChooser();
    navigate('/product-management/add-product');
  };
  const goToOrderManagement = () => {
    navigate('/order-management');
  };

  const handleFilterReset = () => {
    setFilterData({
      months: [],
      year: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleFilterApply = () => {
    console.log('Overview filters applied', filterData);
  };

  const overviewActions = [
    {
      id: 'add-product',
      label: 'Add New Product',
      icon: 'ph:plus-bold',
      variant: 'primary',
      onClick: openChooser,
    },
    {
      id: 'view-order',
      label: 'View Order',
      icon: 'ph:eye-bold',
      variant: 'secondary',
      onClick: goToOrderManagement,
    },
    {
      id: 'filter',
      label: 'Filter',
      icon: 'ph:caret-down-bold',
      iconPosition: 'right',
      variant: 'ghost',
      onClick: openFilter,
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm">
      <GradientOverviewCards
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        metrics={dashboardMetrics}
        filters={[]}
        actions={overviewActions}
        title="Overview"
        subtitle="Quick glance at store performance"
      />
      <AddProductChooser
        open={chooserOpen}
        onClose={closeChooser}
        onBulkUpload={goToAddBulkProduct}
        onOneProduct={goToAddProduct}
      />
      <FilterOffcanvas
        open={filterOpen}
        onClose={closeFilter}
        onReset={handleFilterReset}
        onApply={handleFilterApply}
        title="Filter"
        width={360}
      >
        <OverviewFilterBody filterData={filterData} onFilterChange={setFilterData} />
      </FilterOffcanvas>
    </div>
  );
};

export default OverviewMetrics;