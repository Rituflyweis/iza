const IngredientsSection = () => {
  const ingredients = ['Tulsi', 'Oil', 'Flower', 'Onion', 'Tulsi'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <div className="flex items-start justify-between">
        <h3 className="text-base font-semibold text-gray-900">Ingredients</h3>
        <div className="flex gap-2 flex-wrap">
          {ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;

