import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const Field = ({ label, value }) => (
  <div>
    <label className="block text-sm text-black/60 mb-2 font-semibold">{label}</label>
    <input
      type="text"
      value={value}
      disabled
      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900"
    />
  </div>
);

const TicketDetails = () => {
  const { ticketId, id } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id}/tickets`)} size="small">
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Ticket Details</Box>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Field label="Ticket ID" value={ticketId || '123456'} />
        <Field label="Complained Date" value="123345" />
        <Field label="Status" value="Closed" />
        <Field label="Priority" value="High" />
        <Field label="Assigned Admin" value="John smith" />
        <Field label="Action" value="abc@gmail.com" />
        <Field label="Type" value="Order Related" />
        <Field label="Complaint" value="Lorem ipsum dolor sit" />
        <Field label="Response if any" value="Last response - 02/03/24, 02:33" />
      </div>
    </Box>
  );
};

export default TicketDetails;


