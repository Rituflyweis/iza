
const timeFilters = ['Today', 'This Week', 'This Month', 'This Year'];
import failedTransaction from "../../../assets/failedTransaction.png";
const OverviewCards = ({ activeFilter, onFilterChange, variant = 'default' }) => {
  const overviewMetrics = [
    {
      id: 1,
      label: 'Total Vendors',
      value: '4,850 users',
      trend: '+2.05%',
      accent: 'from-pink-500 to-pink-400',
      icon: failedTransaction,
      gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)'
    },
    {
      id: 2,
      label: 'Active Vendors',
      value: '4,850 users',
      trend: '+2.05%',
      accent: 'from-purple-500 to-purple-400',
      icon: failedTransaction,
      gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)'
    },
    {
      id: 3,
      label: 'Blocked Vendors',
      value: '4,850 users',
      trend: '+2.05%',
      accent: 'from-indigo-500 to-indigo-400',
      icon: failedTransaction,
      gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)'
    },
  ];



  const activeFilterClass = 
   'border border-pink-500  text-pink-500 shadow'
  
  const inactiveFilterClass = 
 
   'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100';

  const metricCardClass =
 'relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm';

  const labelClass =  'text-xs font-semibold uppercase tracking-wide text-gray-400';

  const valueClass =  'mt-2 text-xl font-semibold text-gray-900';

  const trendPillClass =  'rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700';

  const titleClass = 'text-lg font-semibold text-gray-900';

  const subtitleClass = 'text-sm text-gray-400';

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className={titleClass}>Overview</h2>
          <p className={subtitleClass}>Track vendor performance at a glance</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${activeFilter === filter ? activeFilterClass : inactiveFilterClass}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {overviewMetrics.map((metric) => (
          <div
            key={metric.label}
            className="relative flex items-center justify-between overflow-hidden rounded-2xl p-5 text-white shadow-[0_10px_30px_rgba(251,58,169,0.2)]"
            style={{
              backgroundImage: metric.gradient,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              {/* <Icon icon={item.icon} width={32} height={32} /> */}
              <img src={metric?.icon} />
            </div>

            <div className="flex flex-col items-end text-right">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  {metric.label}
                </p>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white bg-green-600 border-b-emerald-50">
                  {metric.trend}
                </span>
              </div>

              <p className="mt-4 text-xl ">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OverviewCards;

