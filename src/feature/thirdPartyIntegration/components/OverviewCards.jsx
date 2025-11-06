import { useState } from 'react';
import graphIcon from '../../../assets/graph.png';
import coinIcon from '../../../assets/coin.png';
import shipmentsIcon from '../../../assets/shipments.png';
import failedIcon from '../../../assets/failedTransaction.png';

const StatCard = ({ imageSrc, title, value, unit }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm">
    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-pink-50 overflow-hidden">
      <img src={imageSrc} alt="icon" className="w-6 h-6 object-contain" />
    </div>
    <div>
      <div className="text-[11px] text-gray-500">{title}</div>
      <div className="text-xl font-extrabold text-gray-900">
        {value} {unit && <span className="text-sm font-semibold text-gray-500">{unit}</span>}
      </div>
    </div>
  </div>
);

const FilterPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-xs font-semibold border ${
      active ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-700 border-gray-200'
    }`}
  >
    {label}
  </button>
);

const OverviewCards = () => {
  const [range, setRange] = useState('Today');

  return (
    <div className="w-full">
      {/* Overview Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        {/* Header row: label left, filters right */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <h3 className="text-sm font-extrabold text-gray-900">Overview</h3>
          <div className="flex items-center gap-2">
            {['Today', 'This Week', 'This Month', 'This Year'].map((label) => (
              <FilterPill key={label} label={label} active={range === label} onClick={() => setRange(label)} />
            ))}
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <StatCard imageSrc={graphIcon} title="Total Transactions" value="1,250" />
          <StatCard imageSrc={coinIcon} title="Success Rate" value="98" unit="%" />
          <StatCard imageSrc={failedIcon} title="Failed Transactions" value="25" />
          <StatCard imageSrc={shipmentsIcon} title="Total Shipments" value="950" />
          <StatCard imageSrc={graphIcon} title="On-Time Deliveries" value="920" />
        </div>

        {/* Secondary row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/3 mt-4">
          <StatCard imageSrc={coinIcon} title="Delayed Shipments" value="98" unit="%" />
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
