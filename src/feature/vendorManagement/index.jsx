import { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import OverviewCards from './components/OverviewCards';
import TopSellingVendorsTable from './components/TopSellingVendorsTable';
import SubmittedApplicationsTable from './components/SubmittedApplicationsTable';

const VendorManagement = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Today');
  const [selectedVendor, setSelectedVendor] = useState(null);

  const modalContent = useMemo(() => {
    if (!selectedVendor) return null;
    const {
      submittedBy,
      vendorName,
      email,
      phone,
      address,
      productsOffered,
      website,
      uploadedForm,
      adminNotes,
      applicationStatus,
    } = {
      submittedBy: selectedVendor.submittedBy,
      vendorName: selectedVendor.details?.vendorName ?? selectedVendor.vendorName,
      email: selectedVendor.details?.email ?? selectedVendor.email,
      phone: selectedVendor.details?.phone ?? selectedVendor.phone,
      address: selectedVendor.details?.address ?? '—',
      productsOffered: selectedVendor.details?.productsOffered ?? '—',
      website: selectedVendor.details?.website ?? '—',
      uploadedForm: selectedVendor.details?.uploadedForm ?? '—',
      adminNotes: selectedVendor.details?.adminNotes ?? '—',
      applicationStatus: selectedVendor.details?.applicationStatus ?? selectedVendor.status,
    };

    return {
      submittedBy,
      vendorName,
      email,
      phone,
      address,
      productsOffered,
      website,
      uploadedForm,
      adminNotes,
      applicationStatus,
    };
  }, [selectedVendor]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Vendor Management</h1>
          <p className="text-sm text-gray-400">
            View and manage all vendors with vendor form
          </p>
        </div>
        <button
          onClick={() => navigate('/vendor-management/form')}
          className="inline-flex items-center gap-2 rounded-full border border-pink-500 bg-pink-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-pink-600"
        >
          <Icon icon="mdi:clipboard-text-outline" width={18} height={18} />
          View Vendor Form
        </button>
      </div>

      <div
        className="overflow-hidden shadow-lg"
        style={{
          borderRadius: '24px',}}
       
      >
        <div className="space-y-6 bg-white/5 p-6 backdrop-blur-[2px]">
          <OverviewCards
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            variant="gradient"
          />
          <TopSellingVendorsTable variant="gradient" standalone={false} />
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Submitted Vendor Applications</h2>
            <p className="text-sm text-gray-400">
              Review new vendor submissions and track statuses
            </p>
          </div>
        </div>
        <SubmittedApplicationsTable onView={(row) => setSelectedVendor(row)} />
      </div>

      <Modal
        open={Boolean(selectedVendor)}
        onClose={() => setSelectedVendor(null)}
        aria-labelledby="vendor-application-title"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
      >
        <Box className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500 shadow-sm">
              <Icon icon="mdi:account-tie" width={24} height={24} />
            </span>
            <h2
              id="vendor-application-title"
              className="mt-3 text-xl font-semibold text-gray-900"
            >
              Vendor Application
            </h2>
          </div>

          {modalContent && (
            <div className="space-y-4 text-sm text-gray-700">
              {[
                ['Submitted By', modalContent.submittedBy],
                ['Vendor Name', modalContent.vendorName],
                ['Email', modalContent.email],
                ['Phone', modalContent.phone],
                ['Address', modalContent.address],
                ['Products Offered', modalContent.productsOffered],
                ['Website/Instagram', modalContent.website],
                ['Uploaded Form', modalContent.uploadedForm],
                ['Admin Notes', modalContent.adminNotes],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-3 border-b border-dashed border-gray-200 pb-3"
                >
                  <span className="flex items-center gap-2 font-semibold text-gray-900">
                    {label.includes('Submitted') && (
                      <Icon icon="mdi:account-check-outline" width={16} height={16} />
                    )}
                    {label.includes('Vendor Name') && (
                      <Icon icon="mdi:storefront-outline" width={16} height={16} />
                    )}
                    {label.includes('Email') && (
                      <Icon icon="mdi:email-outline" width={16} height={16} />
                    )}
                    {label.includes('Phone') && (
                      <Icon icon="mdi:phone-outline" width={16} height={16} />
                    )}
                    {label.includes('Address') && (
                      <Icon icon="mdi:map-marker-outline" width={16} height={16} />
                    )}
                    {label.includes('Products Offered') && (
                      <Icon icon="mdi:package-variant" width={16} height={16} />
                    )}
                    {label.includes('Website') && (
                      <Icon icon="mdi:web" width={16} height={16} />
                    )}
                    {label.includes('Uploaded Form') && (
                      <Icon icon="mdi:file-document-outline" width={16} height={16} />
                    )}
                    {label.includes('Admin Notes') && (
                      <Icon icon="mdi:note-text-outline" width={16} height={16} />
                    )}
                    {label.includes('Application Status') && (
                      <Icon icon="mdi:progress-clock" width={16} height={16} />
                    )}
                    {label}:
                  </span>
                  <span className="max-w-xs text-right text-gray-600">{value}</span>
                </div>
              ))}

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Application Status:</span>
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  {modalContent.applicationStatus}
                </span>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-green-100 px-6 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-200">
              <Icon icon="mdi:check-circle-outline" width={18} height={18} />
              Approve
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-red-100 px-6 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-200">
              <Icon icon="mdi:close-circle-outline" width={18} height={18} />
              Reject
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default VendorManagement;

