import { useState } from 'react';
import ordered  from "../../../../../assets/ordered.png"
import delivered  from "../../../../../assets/delivered.png"
import dispatched from "../../../../../assets/dispatched.png"
import outofdelivery  from "../../../../../assets/outofdelivery.png"
const TrackOrdersForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('Gorem ipsum dolor');
  const [currentStatus, setCurrentStatus] = useState('Dispatched'); // Current status: Ordered, Dispatched, Out for delivery, Delivered

  const statuses = [
    { id: 'Ordered', label: 'Ordered', imageSrc: ordered },
    { id: 'Dispatched', label: 'Dispatched', imageSrc: dispatched },
    { id: 'Out for delivery', label: 'Out for delivery', imageSrc: outofdelivery },
    { id: 'Delivered', label: 'Delivered', imageSrc: delivered },
  ];

  const getStatusIndex = (status) => {
    return statuses.findIndex((s) => s.id === status);
  };

  const handleTrack = (e) => {
    e.preventDefault();
    console.log('Track order:', trackingNumber);
    // Implement track order logic - for demo, status is set to "Dispatched"
    setCurrentStatus('Dispatched');
  };

  const currentIndex = getStatusIndex(currentStatus);

  return (
    <div className="w-full space-y-6">
      <form onSubmit={handleTrack}>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="block text-[11px] text-gray-500 mb-2">Tracking Number</label>
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full border border-gray-200 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 h-10 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold"
          >
            Track Order
          </button>
        </div>
      </form>

      {/* Real-time Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-sm font-bold text-gray-900 mb-6">Real-time Status</h3>
        
        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-pink-600 transition-all duration-300"
              style={{
                width: `${(currentIndex / (statuses.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Status Points - Render asset images for each stage */}
          <div className="relative flex justify-between">
            {statuses.map((status, index) => {
              const isActive = index <= currentIndex;
              const isCurrent = index === currentIndex;

              return (
                <div key={status.id} className="flex flex-col items-center">
                  {/* Asset Icon */}
                  <img
                    src={status.imageSrc}
                    alt={status.label}
                    className={`w-12 h-12 object-contain ${isActive ? '' : 'opacity-50'}`}
                  />
                  {/* Label */}
                  <div className="mt-2 text-center">
                    <span
                      className={`text-xs font-medium ${
                        isActive ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrdersForm;

