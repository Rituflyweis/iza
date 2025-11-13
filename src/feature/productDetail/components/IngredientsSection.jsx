const IngredientsSection = () => {
  const ingredients = ['Tulsi', 'Oil', 'Flower', 'Onion', 'Tulsi'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <h3 className="text-base font-semibold text-gray-900 mb-4">Ingredients</h3>
      <div className="flex flex-row gap-2 flex-wrap items-center">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientsSection;

