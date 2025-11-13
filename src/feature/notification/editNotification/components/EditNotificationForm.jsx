import { useState } from 'react';
import { Icon } from '@iconify/react';

const users = Array.from({ length: 15 }).map((_, i) => ({ id: i + 1, name: `John Smith`, phone: `+91-55${i}4624` }));

const EditNotificationForm = () => {
  const [form, setForm] = useState({ title: 'Lorem ipsum dolor', choose: 'Promotion', message: 'Lorem ipsum dolor sit amet...', file: null });
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setForm({ ...form, file });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, file });
  };

  const toggleUser = (id) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      {/* left column */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Choose</label>
          <div className="relative">
            <select name="choose" value={form.choose} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white">
              <option>Promotion</option>
              <option>Alert</option>
              <option>Reminder</option>
            </select>
            <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width={20} height={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>

        {/* upload */}
        <div>
          <div onDragOver={(e)=>e.preventDefault()} onDrop={handleDrop} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400">
            <input type="file" accept="image/*" className="hidden" id="notif-upload" onChange={handleUpload} />
            <label htmlFor="notif-upload" className="cursor-pointer">
              <Icon icon="mdi:image" className="mx-auto mb-3 text-pink-600" width={40} height={40} />
              <p className="text-sm text-gray-600"><span className="text-blue-600">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">.JPG, .JPEG, .PNG files less than 1MB</p>
              {form.file && <p className="text-sm text-green-600 mt-2">{form.file.name}</p>}
            </label>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button className="px-5 py-2 rounded-md border border-pink-600 text-pink-600 font-semibold">Cancel</button>
          <button className="px-5 py-2 rounded-md bg-pink-600 hover:bg-pink-700 text-white font-semibold">Send</button>
        </div>
      </div>

      {/* right column user list */}
      <div className="border border-gray-200 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-gray-800 text-sm">Select User</div>
          <button className="text-sm text-gray-600 hover:text-pink-600" onClick={()=>setSelected(users.map(u=>u.id))}>Select all</button>
        </div>
        <div className="max-h-[400px] overflow-auto pr-1 space-y-2">
          {users.map((u)=> (
            <label key={u.id} className="flex items-center justify-between gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="inline-block w-8 h-8 rounded-full bg-gray-200" />
                <div>
                  <div className="text-sm text-gray-900">{u.name}</div>
                  <div className="text-xs text-gray-500">{u.phone}</div>
                </div>
              </div>
              <input type="checkbox" checked={selected.includes(u.id)} onChange={()=>toggleUser(u.id)} className="w-4 h-4" />
            </label>
          ))}
        </div>
        {/* pagination mimic */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {[1,2,3,4,5].map(p=> (
            <button key={p} className={`w-6 h-6 rounded-full text-xs ${p===1? 'bg-pink-600 text-white':'bg-gray-100 text-gray-600'}`}>{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditNotificationForm;













