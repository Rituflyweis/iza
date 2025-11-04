import { Box, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const tickets = [
  { id: '123455', date: 'DD-MM-YYYY', issue: 'Payment Not Processed', status: 'Open', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123456', date: 'DD-MM-YYYY', issue: 'Damaged Product', status: 'Closed', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123457', date: 'DD-MM-YYYY', issue: 'Delivery Delayed', status: 'In Progress', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123458', date: 'DD-MM-YYYY', issue: 'Refund Requested', status: 'Closed', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123459', date: 'DD-MM-YYYY', issue: 'Delivery Delayed', status: 'In Progress', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123460', date: 'DD-MM-YYYY', issue: 'Refund Requested', status: 'Closed', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123461', date: 'DD-MM-YYYY', issue: 'Delivery Delayed', status: 'In Progress', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123462', date: 'DD-MM-YYYY', issue: 'Refund Requested', status: 'Closed', updated: 'DD-MM-YYYY', admin: 'John Smith' },
  { id: '123463', date: 'DD-MM-YYYY', issue: 'Delivery Delayed', status: 'Open', updated: 'DD-MM-YYYY', admin: 'John Smith' },
];

const StatusBadge = ({ label }) => {
  const styles = {
    Open: { background: 'rgba(248, 6, 157, 0.12)', color: '#F8069D' },
    'In Progress': { background: 'rgba(255, 193, 7, 0.15)', color: '#F5A524' },
    Closed: { background: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50' },
  }[label] || { background: '#eee', color: '#555' };
  return (
    <span style={{ backgroundColor: styles.background, color: styles.color, borderRadius: '999px', padding: '4px 10px', fontSize: '12px', fontWeight: 600 }}>{label}</span>
  );
};

const TicketRaised = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
            <Icon icon="mdi:chevron-left" width={22} height={22} />
          </IconButton>
          <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Ticket Raised</Box>
        </Box>
        <Button variant="contained" startIcon={<Icon icon="mdi:filter" width={18} height={18} color="#fff" />} sx={{ textTransform: 'none', bgcolor: '#F8069D', '&:hover': { bgcolor: '#C1057D' } }}>Filter</Button>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        {/* header row */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div className="col-span-2">Ticket ID</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-3">Issue Summary</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Last Updated</div>
          <div className="col-span-1">Actions</div>
        </div>

        {/* rows */}
        <div>
          {tickets.map((t, idx) => (
            <div key={t.id} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className="md:col-span-2 text-gray-900">{t.id}</div>
              <div className="md:col-span-2 text-gray-900">{t.date}</div>
              <div className="md:col-span-3 text-gray-900">{t.issue}</div>
              <div className="md:col-span-2"><StatusBadge label={t.status} /></div>
              <div className="md:col-span-2 text-gray-900">{t.updated}</div>
              <div className="md:col-span-1">
                <IconButton size="small" sx={{ color: '#5A6678' }} onClick={() => navigate(`/user-detail/${id || 1}/tickets/${t.id}`)}>
                  <Icon icon="mdi:eye" width={18} height={18} />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
        <Box component="span" sx={{ color: '#5A6678', fontSize: '0.875rem' }}>Page 1</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {['1','2','3','4','5'].map((n) => (
            <Box key={n} sx={{
              minWidth: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%', fontSize: '0.875rem', fontWeight: n==='1'?600:400,
              bgcolor: n==='1' ? '#F8069D' : '#F5F5F5', color: n==='1'?'#fff':'#5A6678', cursor: 'pointer'
            }}>{n}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TicketRaised;



