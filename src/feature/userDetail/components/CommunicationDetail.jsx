import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

const CommunicationDetail = () => {
  const { commId, id } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id || 1}/communication`)} size="small" sx={{ p: 0 }}>
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Communication Detail</Box>
      </Box>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-white">
          <img src="https://i.pravatar.cc/100?img=15" alt="Agent" className="w-8 h-8 rounded-full" />
          <div className="text-sm"><span className="text-black/60">Assigned Agent</span><div className="font-semibold text-gray-900">John Smith</div></div>
        </div>
        <div className="px-4 py-3 text-center text-xs text-black/40">Thurs, 29 Nov 24</div>
        <div className="px-6 py-4 space-y-6">
          <div className="max-w-sm">
            <div className="bg-gray-100 text-gray-900 rounded-xl px-4 py-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac</div>
            <div className="text-[10px] text-black/40 mt-1">12:21</div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-sm">
              <div className="bg-[#FF31B233] text-gray-900 rounded-xl px-4 py-3 text-sm">Forem ipsum dolor sit amet</div>
              <div className="text-[10px] text-black/40 mt-1 text-right">12:36</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CommunicationDetail;



