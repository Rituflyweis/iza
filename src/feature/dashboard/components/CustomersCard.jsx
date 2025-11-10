import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Icon } from '@iconify/react';

const data = [
  { name: 'Repeat Buyers', value: 24, color: '#10B981' },
  { name: 'Abandoned Carts', value: 18, color: '#F97316' },
  { name: 'Active Customer', value: 32, color: '#3B82F6' },
  { name: 'New SignUp', value: 26, color: '#F472B6' },
];

const CustomersCard = () => {
  const total = 100;

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex">Customers</h3>

        <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-gray-600">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className='flex items-center gap-4'>
        <div className="relative h-50 w-50">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                dataKey="value"
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-gray-900">32%</span>
            <span className="text-xs text-gray-400">Total</span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-col ">
          <span className="rounded-full bg-pink-100 px-3 py-1 text-pink-600">
            18% Current Customers
          </span>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-600">
            14% New Customers
          </span>
        </div>
        </div>


        <div className="flex items-center justify-between text-xs font-semibold text-gray-500">

          <div className="flex items-center gap-2">
            {['Today', 'Weekly', 'Monthly', 'Yearly'].map((period, idx) => (
              <button
                key={period}
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${idx === 0
                    ? 'border-pink-500 bg-pink-50 text-pink-600'
                    : 'border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;


