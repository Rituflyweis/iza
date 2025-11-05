import { useState } from 'react';
import { Icon } from '@iconify/react';

const AddVideoForm = () => {
  const [formData, setFormData] = useState({
    videoTitle: '',
    videoType: '',
    videoCategory: '',
    description: '',
    status: '',
    addedOn: '',
    scheduledUploads: '',
  });

  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleVideoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
    }
  };

  const handleThumbnailDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setThumbnailFile(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Video Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Video Title
        </label>
        <input
          type="text"
          name="videoTitle"
          value={formData.videoTitle}
          onChange={handleInputChange}
          placeholder="Enter Video Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Video Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Video Type
        </label>
        <div className="relative">
          <select
            name="videoType"
            value={formData.videoType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select Video Type</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Testimonial">Testimonial</option>
            <option value="Promo">Promo</option>
          </select>
          <Icon
            icon="mdi:chevron-down"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Video Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Video Category
        </label>
        <input
          type="text"
          name="videoCategory"
          value={formData.videoCategory}
          onChange={handleInputChange}
          placeholder="Enter Video Category"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Video Description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Upload Video */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon icon="mdi:paperclip" width={18} height={18} className="text-gray-400" />
          <label className="block text-sm font-medium text-gray-700">
            Upload Video
          </label>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleVideoDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors cursor-pointer"
        >
          <input
            type="file"
            accept="video/mp4,video/mov"
            onChange={handleVideoUpload}
            className="hidden"
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer">
            <Icon
              icon="mdi:video"
              className="mx-auto mb-3 text-pink-600"
              width={48}
              height={48}
            />
            <p className="text-sm text-gray-600">
              <span className="text-blue-600 hover:text-blue-700">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">mp4, .mov Required</p>
            {videoFile && (
              <p className="text-sm text-green-600 mt-2">{videoFile.name}</p>
            )}
          </label>
        </div>
      </div>

      {/* Thumbnail Image */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon icon="mdi:image-outline" width={18} height={18} className="text-gray-400" />
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail Image
          </label>
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleThumbnailDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors cursor-pointer"
        >
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleThumbnailUpload}
            className="hidden"
            id="thumbnail-upload"
          />
          <label htmlFor="thumbnail-upload" className="cursor-pointer">
            <Icon
              icon="mdi:image"
              className="mx-auto mb-3 text-pink-600"
              width={48}
              height={48}
            />
            <p className="text-sm text-gray-600">
              <span className="text-blue-600 hover:text-blue-700">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">jpg, .png Required</p>
            {thumbnailFile && (
              <p className="text-sm text-green-600 mt-2">{thumbnailFile.name}</p>
            )}
          </label>
        </div>
      </div>

      {/* Status and Added On Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="mdi:check-circle" width={18} height={18} className="text-green-500" />
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
          </div>
          <div className="space-y-0">
            <label className="flex items-center gap-2 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={formData.status === 'Published'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData((prev) => ({ ...prev, status: 'Published' }));
                  } else {
                    setFormData((prev) => ({ ...prev, status: '' }));
                  }
                }}
                className="w-4 h-4 border border-gray-300 rounded text-pink-600 focus:ring-pink-500 focus:ring-1"
              />
              <span className="text-sm text-gray-700">Published</span>
            </label>
            <hr className="border-gray-200 my-1" />
            <label className="flex items-center gap-2 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={formData.status === 'Paused'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData((prev) => ({ ...prev, status: 'Paused' }));
                  } else {
                    setFormData((prev) => ({ ...prev, status: '' }));
                  }
                }}
                className="w-4 h-4 border border-gray-300 rounded text-pink-600 focus:ring-pink-500 focus:ring-1"
              />
              <span className="text-sm text-gray-700">Paused</span>
            </label>
          </div>
        </div>

        {/* Added On */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Added On
          </label>
          <div className="relative">
            <input
              type="date"
              name="addedOn"
              value={formData.addedOn}
              onChange={handleInputChange}
              placeholder="Added On"
              className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Icon
              icon="mdi:calendar"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-600 pointer-events-none"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Scheduled Uploads - Full Width Row */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Scheduled Uploads
        </label>
        <div className="relative">
          <input
            type="date"
            name="scheduledUploads"
            value={formData.scheduledUploads}
            onChange={handleInputChange}
            placeholder="Scheduled Uploads"
            className="date-input w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <Icon
            icon="mdi:calendar"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-600 pointer-events-none"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Add Video Button */}
      <div className="flex justify-center pt-4">
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2.5 rounded-md text-sm flex items-center gap-2">
          <Icon icon="mdi:plus" width={18} height={18} />
          Add Video
        </button>
      </div>
    </div>
  );
};

export default AddVideoForm;

