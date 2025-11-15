import { Icon } from '@iconify/react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const revenueData = [
  { month: 'Jan', value: 21000 },
  { month: 'Feb', value: 23000 },
  { month: 'Mar', value: 24000 },
  { month: 'Apr', value: 20000 },
  { month: 'May', value: 25000 },
  { month: 'Jun', value: 25450 },
];

const expenseBreakdown = [
  { label: 'Salaries', value: 1750 },
  { label: 'Marketing', value: 1500 },
  { label: 'Supplies', value: 1400 },
  { label: 'Rent', value: 1800 },
  { label: 'Utilities', value: 1300 },
];

const ProfitLossSection = () => {
  return (
    <div className=" p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Profit &amp; Loss</h2>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600">
          <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className=" shadow-sm border border-gray-100 rounded-2xl p-5">
          <p className="text-base font-semibold text-gray-800">Revenue Trend</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">$25,450</p>
          <p className="text-sm text-green-500 font-semibold mb-4">This Month +12%</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F8069D" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#F8069D" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <Tooltip cursor={{ stroke: '#F8069D', strokeWidth: 1 }} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F8069D"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="shadow-sm border border-gray-100 rounded-2xl p-5">
          <p className="text-base font-semibold text-gray-800">Expense Breakdown</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">$8,750</p>
          <p className="text-sm text-pink-500 font-semibold mb-4">This Month -5%</p>
          <div className="grid grid-cols-5 gap-3 h-48 items-end">
            {expenseBreakdown.map((expense) => (
              <div key={expense.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-2xl bg-[#F8069D]/20 relative"
                  style={{ height: `${(expense.value / 1800) * 100}%` }}
                >
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-[#F8069D]" />
                </div>
                <p className="text-xs font-semibold text-gray-600 text-center">{expense.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossSection;


