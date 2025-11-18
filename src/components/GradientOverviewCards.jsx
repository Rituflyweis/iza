import { Icon } from '@iconify/react';

const timeFilters = ['Today', 'This Week', 'This Month', 'This Year'];

const defaultMetrics = [
  {
    id: 1,
    label: 'Total Vendors',
    value: '4,850 users',
    trend: '+2.05%',
    icon: 'mdi:store',
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 2,
    label: 'Active Vendors',
    value: '4,320 users',
    trend: '+1.48%',
    icon: 'mdi:account-group',
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 3,
    label: 'Blocked Vendors',
    value: '120 users',
    trend: '-0.32%',
    icon: 'mdi:account-cancel',
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
  {
    id: 4,
    label: 'Pending Approvals',
    value: '35 applications',
    trend: '+0.84%',
    icon: 'mdi:clipboard-text',
    gradient: 'linear-gradient(102.03deg, #7F21B5 -10.83%, #FF6BB5 89.48%), linear-gradient(102.03deg, #FF6BB5 4.77%, #7F21B5 105.08%)',
  },
];

const renderMetricIcon = (icon) => {
  if (!icon) return null;

  // If it's an iconify icon (contains colon)
  if (typeof icon === 'string' && icon.includes(':')) {
    return <Icon icon={icon} width={32} height={32} />;
  }

  // If it's an image path (imported asset or URL string)
  if (typeof icon === 'string') {
    return <img src={icon} alt="" className="w-8 h-8 object-contain" />;
  }

  // If it's an object with src property (webpack imported image)
  if (icon && typeof icon === 'object' && icon.src) {
    return <img src={icon.src} alt="" className="w-8 h-8 object-contain" />;
  }

  return icon;
};

const GradientOverviewCards = ({
  activeFilter,
  onFilterChange,
  metrics,
  filters = timeFilters,
  title = 'Overview',
  subtitle = 'Track performance at a glance',
}) => {
  const displayedMetrics = metrics?.length ? metrics : defaultMetrics;

  const activeFilterClass = 'border border-pink-500 text-pink-500 shadow';
  const inactiveFilterClass = 'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100';

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange?.(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeFilter === filter ? activeFilterClass : inactiveFilterClass
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {displayedMetrics.map((metric) => (
          <div
            key={metric.id ?? metric.label}
            className="relative flex items-center justify-between overflow-hidden rounded-2xl p-5 text-white shadow-[0_10px_30px_rgba(251,58,169,0.2)]"
            style={{
              backgroundImage: metric.gradient,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              {renderMetricIcon(metric.icon)}
            </div>

            <div className="flex flex-col items-end text-right">
              <div className="flex items-start gap-2" style={{ maxWidth: metric.label.length > 15 ? '110px' : 'none' }}>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80 leading-tight break-words whitespace-normal">
                  {metric.label}
                </p>
                {metric.trend && (
                  <span className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white whitespace-nowrap flex-shrink-0 mt-0.5">
                    {metric.trend}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xl">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GradientOverviewCards;

