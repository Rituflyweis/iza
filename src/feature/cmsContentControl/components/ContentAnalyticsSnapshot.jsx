import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const chartPoints = [
  { week: 'Week 1', value: 32 },
  { week: 'Week 2', value: 54 },
  { week: 'Week 3', value: 38 },
  { week: 'Week 4', value: 57 },
];

const ContentAnalyticsSnapshot = ({ className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Content Analytics Snapshot (Last 30 Days)
          </h2>
          <p className="text-sm text-gray-500 mt-1">Engagement Rate</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">12.5%</p>
          <p className="text-sm text-pink-600 font-medium">Last 30 Days +2.3%</p>
        </div>
      </div>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={chartPoints} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EC4899" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#EC4899" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis hide domain={[20, 65]} />
            <Tooltip
              cursor={{ stroke: '#FECDD3', strokeWidth: 2 }}
              contentStyle={{ borderRadius: 12, borderColor: '#FECDD3' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#EC4899"
              strokeWidth={3}
              fill="url(#colorEngagement)"
              dot={{ stroke: '#EC4899', strokeWidth: 3, fill: '#fff', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentAnalyticsSnapshot;

