import { Icon } from '@iconify/react';
import { useState } from 'react';

const VariantsEditSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sizeEnabled, setSizeEnabled] = useState(true);
  const [colorEnabled, setColorEnabled] = useState(true);
  const [sizes, setSizes] = useState(['200ml', '250ml']);
  const [colors, setColors] = useState([
    { name: 'Color 1', hex: '#8B4513' },
    { name: 'Color 2', hex: '#FFB6C1' },
    { name: 'Color 3', hex: '#2E7D32' },
    { name: 'Color 4', hex: '#00695C' },
    { name: 'Color 5', hex: '#4A148C' },
  ]);

  const addSize = () => {
    setSizes([...sizes, '']);
  };

  const addColor = () => {
    setColors([...colors, { name: 'New Color', hex: '#000000' }]);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Variants</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-gray-100 rounded transition"
        >
          <Icon 
            icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"} 
            width={24} 
            height={24} 
            className="text-gray-600" 
          />
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Size */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={sizeEnabled}
                onChange={(e) => setSizeEnabled(e.target.checked)}
                className="w-4 h-4 accent-pink-600"
              />
              <span className="text-sm font-semibold text-gray-900">Size</span>
            </label>
            {sizeEnabled && (
              <div className="flex gap-2 flex-wrap items-center">
                {sizes.map((size, index) => (
                  <input
                    key={index}
                    type="text"
                    value={size}
                    onChange={(e) => {
                      const newSizes = [...sizes];
                      newSizes[index] = e.target.value;
                      setSizes(newSizes);
                    }}
                    className="px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
                  />
                ))}
                <button
                  onClick={addSize}
                  className="p-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <Icon icon="mdi:plus" width={18} height={18} className="text-gray-600" />
                </button>
              </div>
            )}
          </div>

          {/* Color Name */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={colorEnabled}
                onChange={(e) => setColorEnabled(e.target.checked)}
                className="w-4 h-4 accent-pink-600"
              />
              <span className="text-sm font-semibold text-gray-900">Color Name</span>
            </label>
            {colorEnabled && (
              <div className="flex gap-2 flex-wrap items-center">
                {colors.map((color, index) => (
                  <div key={index} className="relative group">
                    <div
                      className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                      style={{ backgroundColor: color.hex }}
                    />
                    <button className="absolute -top-1 -right-1 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition">
                      <Icon icon="mdi:pencil" width={14} height={14} className="text-gray-600" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addColor}
                  className="p-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <Icon icon="mdi:plus" width={18} height={18} className="text-gray-600" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantsEditSection;

