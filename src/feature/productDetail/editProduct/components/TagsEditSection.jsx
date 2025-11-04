import { useState } from 'react';

const TagsEditSection = () => {
  const [tags, setTags] = useState({
    new: true,
    featured: false,
    limitedEdition: false,
    custom: false,
  });

  const [sustainabilityTags, setSustainabilityTags] = useState({
    vegan: true,
    ecoFriendly: false,
    crueltyFree: false,
    custom: false,
  });

  const handleTagChange = (tag) => (e) => {
    setTags((prev) => ({ ...prev, [tag]: e.target.checked }));
  };

  const handleSustainabilityTagChange = (tag) => (e) => {
    setSustainabilityTags((prev) => ({ ...prev, [tag]: e.target.checked }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Tags */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tags.new}
              onChange={handleTagChange('new')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">New</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tags.featured}
              onChange={handleTagChange('featured')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Featured</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tags.limitedEdition}
              onChange={handleTagChange('limitedEdition')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Limited Edition</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tags.custom}
              onChange={handleTagChange('custom')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Custom</span>
          </label>
        </div>
      </div>

      {/* Sustainability Tags */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Sustainability Tags</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sustainabilityTags.vegan}
              onChange={handleSustainabilityTagChange('vegan')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Vegan</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sustainabilityTags.ecoFriendly}
              onChange={handleSustainabilityTagChange('ecoFriendly')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Eco-Friendly</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sustainabilityTags.crueltyFree}
              onChange={handleSustainabilityTagChange('crueltyFree')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Cruelty Free</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={sustainabilityTags.custom}
              onChange={handleSustainabilityTagChange('custom')}
              className="w-4 h-4 accent-pink-600"
            />
            <span className="text-sm text-gray-700">Custom</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TagsEditSection;

