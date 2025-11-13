import { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import AdminRolesTable from './components/AdminRolesTable';

const defaultRows = [
  {
    id: 1,
    roleName: 'Super Admin',
    assignedUser: 'John Smith',
    permissions: 'Full access',
    status: 'Active',
  },
  {
    id: 2,
    roleName: 'Product Manager',
    assignedUser: 'John Smith',
    permissions: 'View/Edit Orders, Process Refunds',
    status: 'Inactive',
  },
  {
    id: 3,
    roleName: 'Order Manager',
    assignedUser: 'John Smith',
    permissions: 'View/Edit Products',
    status: 'Active',
  },
  {
    id: 4,
    roleName: 'Support Agent',
    assignedUser: 'John Smith',
    permissions: 'View/Edit Products',
    status: 'Active',
  },
];

const AdminRoles = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState(defaultRows);
  const [search, setSearch] = useState('');

  const handleToggleStatus = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, status: row.status === 'Active' ? 'Inactive' : 'Active' }
          : row,
      ),
    );
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) {
      return rows;
    }
    return rows.filter(
      (row) =>
        row.roleName.toLowerCase().includes(term) ||
        row.assignedUser.toLowerCase().includes(term) ||
        row.permissions.toLowerCase().includes(term),
    );
  }, [rows, search]);

  return (
    <div className="">
      <div className="mb-5 flex flex-col gap-4  md:flex-row md:items-center md:justify-between">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <Icon icon="mdi:chevron-left" width={20} height={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Admin Roles &amp; Permissions
          </h1>
            <p className="text-sm text-gray-400">
            Manage admin access levels and assign responsibilities
          </p>
        </div>
      </div>
       <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <div className="relative w-full md:w-64">
            <Icon
              icon="mdi:magnify"
              width={18}
              height={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-100"
            />
          </div>
          <button
             onClick={() => navigate('/settings/admin-roles/new')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600"
          >
            <Icon icon="mdi:plus" width={16} height={16} />
            Add New
          </button>
        </div>
        </div>


      <AdminRolesTable
        rows={filteredRows}
        onToggleStatus={handleToggleStatus}
        onEdit={() => navigate('/settings/admin-roles/new')}
      />
    </div>
  );
};

export default AdminRoles;




