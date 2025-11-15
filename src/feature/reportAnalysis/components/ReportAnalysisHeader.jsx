import { Icon } from '@iconify/react';

const ReportAnalysisHeader = () => {
  return (
    <div className=" p-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Report &amp; Analysis</h1>
        <p className="text-sm text-gray-500 mt-1">Vorem ipsum dolor sit</p>
      </div>

      <div className="flex items-center gap-3">
         <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
           <Icon icon="mdi:filter-outline" width={18} height={18} />
          Filter
        </button>
         <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F8069D] text-white text-sm font-semibold shadow hover:bg-[#c1057d] transition">
          <Icon icon="mdi:export-variant" width={18} height={18} />
          Export
        </button>
      </div>
    </div>
  );
};

export default ReportAnalysisHeader;


