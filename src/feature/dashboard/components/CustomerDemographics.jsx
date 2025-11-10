import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,Legend
} from 'recharts';
import { Icon } from '@iconify/react';

const ageData = [
  { range: '16 - 25', value: 85 },
  { range: '25 - 34', value: 72 },
  { range: '34 - 44', value: 48 },
  { range: '45+', value: 65 },
];
 const data = [
    { range: "16 - 25", value: 70 },
    { range: "25 - 34", value: 95 },
    { range: "34 - 44", value: 80 },
    { range: "45 +", value: 40 },
  ];
const genderData = [
  { name: 'Female', value: 66, color: '#EC4899' },
  { name: 'Male', value: 28, color: '#3B82F6' },
  { name: 'Others', value: 6, color: '#F97316' },
];

const regionalData = [
  { region: 'Delhi', percentage: '12%', color: '#3B82F6' },
  { region: 'Kolkata', percentage: '8%', color: '#22C55E' },
  { region: 'Mumbai', percentage: '12%', color: '#F97316' },
  { region: 'Bengaluru', percentage: '9%', color: '#EC4899' },
];

const CustomerDemographics = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Customer Demographics</h3>
        <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
          <Icon icon="mdi:filter-variant" width={16} height={16} />
          Filter
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <h4 className="mb-4 text-sm font-semibold text-gray-900">User Age Insights</h4>
          <div className="h-48">
            <ResponsiveContainer>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="range" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip cursor={{ fill: 'rgba(236,72,153,0.1)' }} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#EC4899" barSize={26} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div> */}
          <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">User Age Insights</h2>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="range" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#ff00a8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

        {/* <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <h4 className="mb-2 text-sm font-semibold text-gray-900">Gender Breakdown</h4>
          <div className="relative h-48">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={genderData}
                  innerRadius="55%"
                  outerRadius="80%"
                  dataKey="value"
                  stroke="none"
                >
                  {genderData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base font-semibold text-gray-900">100%</span>
              <span className="text-xs text-gray-400">Total</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            {genderData.map((item) => (
              <span
                key={item.name}
                className="rounded-full bg-gray-100 px-3 py-1"
                style={{ color: item.color }}
              >
                {item.value}% {item.name}
              </span>
            ))}
          </div>
        </div> */}
         <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">Gender Breakdown</h2>

      <div className="h-60 flex justify-center">
        <ResponsiveContainer width="80%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius="80%"
              innerRadius="60%"
              paddingAngle={2}
            >
              {genderData.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Percent Labels */}
      <div className="flex justify-center gap-4 mt-2">
        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
          18% Male
        </span>
        <span className="px-2 py-1 text-xs bg-blue-200 text-blue-600 rounded-full">
          35% Female
        </span>
        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
          1% Others
        </span>
      </div>
    </div>

        {/* <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <h4 className="mb-2 text-sm font-semibold text-gray-900">Regional Performance</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-600">
            {regionalData.map((item) => (
              <div
                key={item.region}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <span className="font-semibold text-gray-900">{item.region}</span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.percentage}
                </span>
              </div>
            ))}
          </div>
        </div> */}
          <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">Regional Performance</h2>

      <div className="h-60 flex justify-center items-center">
        <img
          src="/india-map-performance.png" 
          alt="region map"
          className="h-full object-contain"
        />
      </div>
    </div>
      </div>
    </div>
  );
};

export default CustomerDemographics;


