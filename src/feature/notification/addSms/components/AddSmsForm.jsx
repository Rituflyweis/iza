const AddSmsForm = () => {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
          <span className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full text-sm">Lorem Ipsum <button className="text-gray-500">×</button></span>
          <button className="ml-auto bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold px-3 py-1 rounded">+ ADD</button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea rows={8} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter message" />
      </div>
      <div className="flex gap-3 pt-2">
        <button className="px-5 py-2 rounded-md border border-pink-600 text-pink-600 font-semibold">Cancel</button>
        <button className="px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white font-semibold">Send</button>
      </div>
    </div>
  );
};

export default AddSmsForm;












