const VariantsSection = () => {
  const sizes = ['250ml', '250ml'];
  const colors = [
    { name: 'Color 1', hex: '#8B4513' }, // dark reddish-brown
    { name: 'Color 2', hex: '#FFB6C1' }, // light pink
    { name: 'Color 3', hex: '#2E7D32' }, // dark teal/green
    { name: 'Color 4', hex: '#6B8E23' }, // olive green
    { name: 'Color 5', hex: '#4A148C' }, // dark purple/maroon
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-semibold text-gray-900 mb-4">Variants</h3>
      
      <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-black/60 mb-2">Size</label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  index === 0
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black/60 mb-2">Color</label>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-sm border border-gray-300"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariantsSection;

