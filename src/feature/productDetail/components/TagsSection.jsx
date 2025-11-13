const TagsSection = () => {
  const tags = ['New', 'Featured'];
  const sustainabilityTags = ['Vegan', 'Eco-Friendly'];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-row gap-2 flex-wrap items-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Sustainability Tags</h3>
        <div className="flex flex-row gap-2 flex-wrap items-center">
          {sustainabilityTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagsSection;

