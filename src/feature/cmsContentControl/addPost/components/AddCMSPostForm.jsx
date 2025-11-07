import { Icon } from '@iconify/react';

const toolbarItems = [
  { id: 'font', icon: 'mdi:format-size', label: 'Font' },
  { id: 'style', icon: 'mdi:format-letter-case', label: 'Style' },
  { id: 'italic', icon: 'mdi:format-italic', label: 'Italic' },
  { id: 'bold', icon: 'mdi:format-bold', label: 'Bold' },
  { id: 'underline', icon: 'mdi:format-underline', label: 'Underline' },
  { id: 'bullet', icon: 'mdi:format-list-bulleted', label: 'Bullets' },
  { id: 'number', icon: 'mdi:format-list-numbered', label: 'Numbered' },
  { id: 'align', icon: 'mdi:format-align-left', label: 'Align' },
  { id: 'link', icon: 'mdi:link-variant', label: 'Link' },
];

const tagOptions = [
  { id: 'new', label: 'New' },
  { id: 'featured', label: 'Featured' },
  { id: 'custom', label: 'Custom' },
];

const AddCMSPostForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
      <div className="grid md:grid-cols-1 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter blog post title"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            defaultValue=""
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select category
            </option>
            <option>Homepage &amp; Landing</option>
            <option>Blog</option>
            <option>SEO</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Tags</label>
          <select
            defaultValue=""
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select sub-category
            </option>
            <option>Product Launch</option>
            <option>Announcements</option>
            <option>Tutorial</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Blog Post Content</label>
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200">
            {toolbarItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="flex items-center gap-2 text-indigo-600 text-sm font-medium hover:text-pink-600 focus:outline-none"
              >
                <Icon icon={item.icon} width={18} height={18} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
          <textarea
            rows={8}
            placeholder="Write post content"
            className="w-full px-4 py-4 text-sm outline-none resize-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Featured Image</label>
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center text-sm text-gray-500">
          <Icon icon="mdi:image-outline" width={42} height={42} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-700 font-medium">Click to upload</p>
          <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
          <p className="text-xs text-gray-400 mt-2">JPG, CSV, Excel less than 1MB</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">SEO Title Tag</label>
          <input
            type="text"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Meta Description</label>
          <input
            type="text"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 hover:bg-white focus:bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Tags</p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50">
          {tagOptions.map((option, index) => (
            <label
              key={option.id}
              className={`flex items-center gap-3 px-4 py-3 text-sm text-gray-700 ${
                index !== tagOptions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <input type="radio" name="tag" className="accent-pink-500" />
              <span className="font-medium">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold shadow-sm">
          <Icon icon="mdi:plus-circle-outline" width={20} height={20} />
          Add Content
        </button>
      </div>
    </div>
  );
};

export default AddCMSPostForm;

