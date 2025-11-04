import { useState } from 'react';

const IngredientsEditSection = () => {
  const [ingredients, setIngredients] = useState('Tutti, Oil, Flavonol, Chlore, Tutti');

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-4">
      <label className="block text-sm font-semibold text-gray-600 mb-2">Ingredients</label>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
        placeholder="Enter ingredients separated by commas"
      />
    </div>
  );
};

export default IngredientsEditSection;

