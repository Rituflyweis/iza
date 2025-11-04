const VariantsSection = () => {
  const sizes = ['250ml', '250ml'];
  const colors = [
    { name: 'Color 1', hex: '#8B4513' },
    { name: 'Color 2', hex: '#FFB6C1' },
    { name: 'Color 3', hex: '#2E7D32' },
    { name: 'Color 4', hex: '#00695C' },
    { name: 'Color 5', hex: '#4A148C' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-semibold text-gray-900 mb-4">Variants</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Size</label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm text-gray-700 hover:border-gray-300 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Color</label>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-lg border-2 border-gray-200"
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

