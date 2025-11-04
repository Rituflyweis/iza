import { Icon } from '@iconify/react';
import { useState } from 'react';

const FileUploadSection = () => {
  const [file, setFile] = useState({ name: 'bulk_upload.csv' });

  const handleRemove = () => {
    setFile(null);
  };

  if (!file) return null;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon icon="mdi:file-document-outline" width={24} height={24} className="text-gray-600" />
          <span className="text-sm text-gray-700">{file.name}</span>
          <button
            onClick={handleRemove}
            className="p-1 hover:bg-gray-100 rounded transition"
          >
            <Icon icon="mdi:trash-can-outline" width={20} height={20} className="text-gray-600" />
          </button>
        </div>
        <button className="bg-[#F8069D] hover:bg-[#C1057D] text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploadSection;

