import { Icon } from '@iconify/react';

const rows = [
  { id: 1, location: 'India', rate: '7%' },
  { id: 2, location: 'Kolkata', rate: '18%' },
  { id: 3, location: 'Delhi', rate: '7%' },
  { id: 4, location: 'Kanpur', rate: '18%' },
  { id: 5, location: 'Patna', rate: '7%' },
  { id: 6, location: 'Kolkata', rate: '18%' },
  { id: 7, location: 'Delhi', rate: '7%' },
];

const TaxRulesTable = ({ onAddNew }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
            <Icon icon="mdi:filter-variant" width={16} height={16} />
            Filter
          </button>
        </div>
        <button
          onClick={onAddNew}
          className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600"
        >
          <Icon icon="mdi:plus" width={16} height={16} />
          Add New
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-400">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Country/City</th>
              <th className="px-6 py-3 text-left font-medium">Tax Rate</th>
              <th className="px-6 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.id}
                className={`${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border-b border-gray-100 last:border-none`}
              >
                <td className="px-6 py-3 font-semibold text-gray-900">{row.location}</td>
                <td className="px-6 py-3">{row.rate}</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <button className="hover:text-pink-500">
                      <Icon icon="mdi:pencil-outline" width={18} height={18} />
                    </button>
                    <button className="hover:text-pink-500">
                      <Icon icon="mdi:trash-can-outline" width={18} height={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 text-xs text-gray-500">
        <span>Page 1</span>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100">
            <Icon icon="mdi:chevron-left" width={18} height={18} />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`h-8 w-8 rounded-full text-xs font-semibold ${
                page === 2
                  ? 'bg-pink-500 text-white shadow'
                  : 'border border-gray-200 bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100">
            <Icon icon="mdi:chevron-right" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxRulesTable;


