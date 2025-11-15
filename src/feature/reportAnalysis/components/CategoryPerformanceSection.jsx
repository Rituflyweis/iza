const categories = [
  { name: 'Skincare', revenue: '$12,500', expenses: '$3,500', margin: 72 },
  { name: 'Makeup', revenue: '$8,200', expenses: '$2,800', margin: 66 },
  { name: 'Haircare', revenue: '$3,750', expenses: '$1,250', margin: 60 },
  { name: 'Fragrances', revenue: '$1,000', expenses: '$500', margin: 50 },
];

const CategoryPerformanceSection = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="py-3 font-semibold">Category</th>
              <th className="py-3 font-semibold">Revenue</th>
              <th className="py-3 font-semibold">Expenses</th>
              <th className="py-3 font-semibold">Profit Margin</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.name} className="border-b border-gray-100 last:border-transparent">
                <td className="py-4 font-semibold text-gray-900">{category.name}</td>
                <td className="py-4 text-gray-700">{category.revenue}</td>
                <td className="py-4 text-gray-700">{category.expenses}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 bg-gray-100 rounded-full flex-1">
                      <div
                        className="h-full rounded-full bg-[#F8069D]"
                        style={{ width: `${category.margin}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{category.margin}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryPerformanceSection;


