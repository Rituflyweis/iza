import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const rows = [
  { id: '1', date: '28/12/24\n09:35 AM', type: 'Chat', userMsg: "I didn't receive my order yet", adminResp: "We're checking this issue for you.", agent: 'John Smith' },
  { id: '2', date: '28/12/24\n09:35 AM', type: 'Email', userMsg: 'Refund request for damaged product.', adminResp: 'Refund initiated. It will reflect soon.', agent: 'John Smith' },
  { id: '3', date: '28/12/24\n09:35 AM', type: 'Call', userMsg: 'Need help with a coupon code.', adminResp: 'Explained how to apply the coupon', agent: 'John Smith' },
  { id: '4', date: '28/12/24\n09:35 AM', type: 'Email', userMsg: 'Refund request for damaged product.', adminResp: 'Refund initiated. It will reflect soon.', agent: 'John Smith' },
  { id: '5', date: '28/12/24\n09:35 AM', type: 'Call', userMsg: 'Need help with a coupon code.', adminResp: 'Explained how to apply the coupon', agent: 'John Smith' },
  { id: '6', date: '28/12/24\n09:35 AM', type: 'Email', userMsg: 'Refund request for damaged product.', adminResp: 'Refund initiated. It will reflect soon.', agent: 'John Smith' },
  { id: '7', date: '28/12/24\n09:35 AM', type: 'Call', userMsg: 'Need help with a coupon code.', adminResp: 'Explained how to apply the coupon', agent: 'John Smith' },
  { id: '8', date: '28/12/24\n09:35 AM', type: 'Email', userMsg: 'Refund request for damaged product.', adminResp: 'Refund initiated. It will reflect soon.', agent: 'John Smith' },
  { id: '9', date: '28/12/24\n09:35 AM', type: 'Call', userMsg: 'Need help with a coupon code.', adminResp: 'Explained how to apply the coupon', agent: 'John Smith' },
];

const CommunicationHistory = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Communication History</Box>
      </Box>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 px-4 py-3 text-[12px] font-extrabold text-black/40">
          <div className="col-span-2">Date & Time</div>
          <div className="col-span-1">Type</div>
          <div className="col-span-3">User Message/Query</div>
          <div className="col-span-3">Admin Response</div>
          <div className="col-span-2">Assigned Agent</div>
          <div className="col-span-1">Action</div>
        </div>

        <div>
          {rows.map((r, idx) => (
            <div key={r.id} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 py-4 ${idx % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
              <div className="md:col-span-2 text-gray-900 whitespace-pre-line">{r.date}</div>
              <div className="md:col-span-1 text-gray-900">{r.type}</div>
              <div className="md:col-span-3 text-gray-900">{r.userMsg}</div>
              <div className="md:col-span-3 text-gray-900">{r.adminResp}</div>
              <div className="md:col-span-2 text-gray-900">{r.agent}</div>
              <div className="md:col-span-1">
                <IconButton size="small" sx={{ color: '#5A6678' }} onClick={() => navigate(`/user-detail/${id || 1}/communication/${r.id}`)}>
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

export default CommunicationHistory;



