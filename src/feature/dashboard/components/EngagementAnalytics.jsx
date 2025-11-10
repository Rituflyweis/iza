import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  BarChart,PieChart,Pie,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import { Icon } from '@iconify/react';

const gaugeData = [
  { name: 'Avg Session', value: 68, fill: '#EC4899' },
  { name: 'Peak Usage', value: 32, fill: '#F3F4F6' },
];
 const colors = ["#ff0000", "#00aaff", "#00ff99"];
const interactionData = [
  { name: 'Tutorials', value: 1200, color: '#EC4899' },
  { name: 'Blogs', value: 800, color: '#6366F1' },
  { name: 'Wishlist Adds', value: 1000, color: '#60A5FA' },
  { name: 'Product Reviews', value: 1200, color: '#22C55E' },
  { name: 'Loyalty Program', value: 1200, color: '#A855F7' },
  { name: 'Chatbot', value: 900, color: '#F97316' },
];

const EngagementAnalytics = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Engagement Analytics</h3>
        <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
          <Icon icon="mdi:filter-variant" width={16} height={16} />
          Filter
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900">Avg. Time Spent (per Session)</h4>
            <p className="text-xs text-gray-400">Maximum Time - 10 min</p>
          </div>
          <div className="relative h-52">
            <ResponsiveContainer>
              <RadialBarChart
                innerRadius="40%"
                outerRadius="80%"
                data={gaugeData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar background clockWise dataKey="value" />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-gray-900">5m 32s</span>
              <span className="text-xs text-gray-400">Average Session Time</span>
              <span className="mt-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-blue-500">
                Peak Usage Hours: 6pm - 9pm
              </span>
            </div>
          </div>
        </div> */}
  <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">Avg. Time Spent (per Session)</h2>

      <div className="flex justify-between text-xs font-semibold mb-4">
        <span>Maximum Time - 10min</span>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              startAngle={180}
              endAngle={0}
              data={gaugeData}
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={2}
              dataKey="value"
            >
              {colors.map((c, i) => (
                <Cell key={i} fill={c} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-600 text-center mt-2">
        Average Session Time: <b>5m 32s</b>
      </p>
      <p className="text-sm text-gray-600 text-center">
        Peak Usage Hours: <b>7 PM - 9 PM</b>
      </p>
    </div>
        {/* <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900">Interactions with Features</h4>
          </div>
          <div className="h-52">
            <ResponsiveContainer>
              <BarChart
                data={interactionData}
                layout="vertical"
                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  width={110}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip cursor={{ fill: 'rgba(236,72,153,0.1)' }} />
                <Bar dataKey="views" radius={[0, 12, 12, 0]}>
                  {interactionData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-xs text-gray-400">* Data reflects last 7 days of activity</div>
        </div> */}
         <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">Interactions with Features</h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={interactionData}>
            <CartesianGrid horizontal={false} stroke="#eee" />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="value" radius={[0, 10, 10, 0]}>
              {interactionData.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
      </div>
    </div>
  );
};

export default EngagementAnalytics;


