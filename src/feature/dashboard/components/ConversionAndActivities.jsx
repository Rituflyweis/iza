import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";

const ConversionAndActivities = () => {
  const [active, setActive] = useState("Today");

  // Funnel Data
  const funnelData = [
    { name: "Homepage Visits", value: 10000, percent: "100%" },
    { name: "Product Views", value: 7000, percent: "70%" },
    { name: "Add to Cart", value: 4500, percent: "45%" },
    { name: "Checkout Initiated", value: 2500, percent: "25%" },
    { name: "Purchases", value: 1000, percent: "10%" },
  ];

  // Donut Chart Data
  const donutData = [
    { name: "Shopping", value: 55, color: "#00c896" },
    { name: "Watching Tutorials", value: 30, color: "#007aff" },
    { name: "Reading Blogs", value: 15, color: "#ff5a79" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

      {/* ---------------- LEFT SIDE - FUNNEL ---------------- */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h2 className="font-semibold text-lg mb-4">User Conversion Funnel</h2>

<div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <FunnelChart>
      <defs>
        <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF00A8" />
          <stop offset="100%" stopColor="#FF4F7A" />
        </linearGradient>
      </defs>

      <Funnel
        data={funnelData}
        dataKey="value"
        fill="url(#pinkGradient)"
        isAnimationActive={false}
      >
        <LabelList
          position="center"
          style={{
            fill: "#ffffff",          // ✅ white text
            fontSize: 13,
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.3
          }}
          formatter={(value) => {
            const item = funnelData.find((d) => d.value === value);
            if (!item) return "";
            return `${item.name}\n${item.value.toLocaleString()} users\n(${item.percent})`;
          }}
        />
      </Funnel>
    </FunnelChart>
  </ResponsiveContainer>
</div>


      </div>

      {/* ---------------- RIGHT SIDE - DONUT CHART ---------------- */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h2 className="font-semibold text-lg mb-4">Users Top Activities</h2>

        <div className="flex">
          {/* Donut Chart */}
          <div className="w-1/2 h-64 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  dataKey="value"
                  innerRadius="65%"
                  outerRadius="85%"
                  paddingAngle={8}
                  stroke="none"
                >
                  {donutData.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>

                {/* Center Label */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  100% Total
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Labels */}
          <div className="w-1/2 flex flex-col justify-center gap-3 mt-4">
            {donutData.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.name} - {item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mt-6">
          {["Today", "Weekly", "Monthly", "Yearly"].map((period) => (
            <button
              key={period}
              onClick={() => setActive(period)}
              className={`px-4 py-2 rounded-lg border text-sm transition ${
                active === period
                  ? "border-pink-500 bg-pink-50 text-pink-600 font-medium"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ConversionAndActivities;
