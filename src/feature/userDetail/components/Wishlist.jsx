import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import wishlistImage from '../../../assets/wishlistImage.png';

const products = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  brand: 'STREAX',
  name: 'Streax Hair Serum\nEnriched With Vitamin',
  price: 159,
  mrp: 299,
  off: '40% Off',
  image: wishlistImage,
}));

const Wishlist = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '1rem' }}>
        <IconButton onClick={() => navigate(`/user-detail/${id || 1}`)} size="small" sx={{ p: 0 }}>
          <Icon icon="mdi:chevron-left" width={22} height={22} />
        </IconButton>
        <Box component="span" sx={{ fontWeight: 700, color: '#1A1A1A' }}>Wishlist</Box>
      </Box>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-sm transition-shadow">
            <div className="w-full h-40 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="max-h-full object-contain" />
            </div>
            <div className="mt-3 text-[10px] text-gray-400 font-semibold">{p.brand}</div>
            <div className="text-sm text-gray-900 leading-tight whitespace-pre-line">{p.name}</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="font-bold text-gray-900">₹ {p.price}</div>
              <div className="text-gray-400 line-through text-xs">₹{p.mrp}</div>
              <div className="text-green-500 text-xs">({p.off})</div>
            </div>
          </div>
        ))}
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

export default Wishlist;



