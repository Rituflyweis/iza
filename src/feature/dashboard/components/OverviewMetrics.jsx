import { Icon } from '@iconify/react';
import coin from "../../../assets/coin.png"
import shipments from "../../../assets/shipments.png"
import graph from "../../../assets/graph.png"
import failedTransaction from  "../../../assets/failedTransaction.png"

const metrics = [
  {
    label: 'Total Sales',
    value: '15,250 orders',
    delta: '+2.06%',
    icon: graph,
    colorFrom: '#FB3AA9',
    colorTo: '#FF6B98',
  },
  {
    label: 'Total Revenue',
    value: '₹ 7,20,000',
    delta: '+2.06%',
    icon: coin,
    colorFrom: '#FF7D9E',
    colorTo: '#FF2EBE',
  },
  {
    label: 'Active Users',
    value: '4,850 users',
    delta: '+2.06%',
    icon: failedTransaction,
    colorFrom: '#FB3AA9',
    colorTo: '#FF6B98',
  },
  {
    label: 'Site Traffic',
    value: '18,000 visits',
    delta: '+2.06%',
    icon: shipments,
    colorFrom: '#FF7D9E',
    colorTo: '#FF2EBE',
  },
];

const OverviewMetrics = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-500 py-2 text-xs   shadow-sm hover:border-pink-300 hover:text-pink-700 text-white px-4">
            <Icon icon="mdi:plus" width={16} height={16} />
            Add New Product
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-transparent bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-pink-600">
            View Order
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border  border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 hover:border-pink-500 hover:text-pink-600">
            <Icon icon="mdi:filter-variant" width={16} height={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
        
          <div
  key={item.label}
  className="relative flex items-center justify-between overflow-hidden rounded-2xl p-5 text-white shadow-[0_10px_30px_rgba(251,58,169,0.2)]"
  style={{
    backgroundImage: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})`,
  }}
>
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
    {/* <Icon icon={item.icon} width={32} height={32} /> */}
    <img src ={item?.icon}/>
  </div>

  <div className="flex flex-col items-end text-right">
    <div className="flex items-center gap-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
        {item.label}
      </p>
      <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white bg-green-600 border-b-emerald-50">
        {item.delta}
      </span>
    </div>

    <p className="mt-4 text-xl ">{item.value}</p>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default OverviewMetrics;


