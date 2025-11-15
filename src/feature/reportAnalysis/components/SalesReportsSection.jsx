import { Icon } from '@iconify/react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const salesData = [
  { day: 'Mon', value: 4000 },
  { day: 'Tue', value: 5200 },
  { day: 'Wed', value: 6100 },
  { day: 'Thu', value: 4800 },
  { day: 'Fri', value: 6800 },
  { day: 'Sat', value: 5400 },
  { day: 'Sun', value: 5000 },
];

const regionStats = [
  { state: 'Delhi', percent: '43%', color: '#FF7EB6' },
  { state: 'Gujarat', percent: '20%', color: '#7A8CFF' },
  { state: 'Karnataka', percent: '15%', color: '#FF5A8F' },
];

const SalesReportsSection = () => {
  return (
    <div className=" p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Sales Reports</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className=" bg-white  shadow-sm border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-base font-semibold text-gray-800">Sales report</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F8069D" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#F8069D" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <Tooltip cursor={{ stroke: '#F8069D', strokeWidth: 1 }} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F8069D"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#salesGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className=" bg-white  shadow-sm border border-gray-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-base font-semibold text-gray-800">Top Region Sales</p>
          </div>
          <div className="rounded-2xl border border-dashed border-gray-200 p-4 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl h-48 flex items-center justify-center text-gray-400 text-sm">
              India Heatmap Placeholder
            </div>
            <div className="space-y-3">
              {regionStats.map((region) => (
                <div key={region.state} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: region.color }} />
                    <p className="text-sm font-semibold text-gray-700">{region.state}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{region.percent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReportsSection;


