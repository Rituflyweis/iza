const TagsSection = () => {
  const tags = ['New', 'Featured'];
  const sustainabilityTags = ['Vegan', 'Eco-Friendly'];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-gray-900">Tags</h3>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-gray-900">Sustainability Tags</h3>
          <div className="flex gap-2 flex-wrap">
            {sustainabilityTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsSection;

