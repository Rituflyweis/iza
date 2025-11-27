import { Box, Stepper, Step, StepLabel, Typography, LinearProgress } from '@mui/material';
import orderedImage from '../../../assets/ordered.png';
import dispatchedImage from '../../../assets/dispatched.png';
import outForDeliveryImage from '../../../assets/outofdelivery.png';
import deliveredImage from '../../../assets/delivered.png';

const OrderProgressCard = ({ orderData }) => {
  const orderStatus = orderData?.orderStatus || orderData?.status || 'Pending';
  const deliveryStatus = orderData?.deliveryStatus || '';
  
  const stages = [
    { name: 'Ordered', image: orderedImage },
    { name: 'Dispatched', image: dispatchedImage },
    { name: 'Out for delivery', image: outForDeliveryImage },
    { name: 'Delivered', image: deliveredImage },
  ];

  const getCurrentStageIndex = () => {
    // Handle cancelled/returned orders - show no progress or show up to the last completed stage
    const orderStatusLower = orderStatus.toLowerCase();
    const deliveryStatusLower = deliveryStatus.toLowerCase();
    
    // If order is cancelled or returned, check if we have delivery status to show partial progress
    if (orderStatusLower.includes('cancelled') || orderStatusLower.includes('returned')) {
      // If delivery status exists, show progress up to that point
      if (deliveryStatusLower.includes('delivered')) return 3;
      if (deliveryStatusLower.includes('out for delivery') || deliveryStatusLower.includes('outfordelivery')) return 2;
      if (deliveryStatusLower.includes('dispatched')) return 1;
      // If cancelled before dispatch, show only ordered
      return 0;
    }
    
    // Use deliveryStatus for more accurate progress (if available)
    if (deliveryStatus) {
      if (deliveryStatusLower.includes('delivered')) return 3;
      if (deliveryStatusLower.includes('out for delivery') || deliveryStatusLower.includes('outfordelivery')) return 2;
      if (deliveryStatusLower.includes('dispatched')) return 1;
    }
    
    // Fallback to orderStatus
    if (orderStatusLower.includes('delivered')) return 3;
    if (orderStatusLower.includes('out for delivery') || orderStatusLower.includes('outfordelivery')) return 2;
    if (orderStatusLower.includes('dispatched') || orderStatusLower.includes('shipped')) return 1;
    if (orderStatusLower.includes('ordered') || orderStatusLower.includes('pending')) return 0;
    
    // Default to first stage
    return 0;
  };

  const currentIndex = getCurrentStageIndex();
  const isCancelled = orderStatus?.toLowerCase().includes('cancelled');
  const isReturned = orderStatus?.toLowerCase().includes('returned');
  const progressPercentage = (currentIndex / (stages.length - 1)) * 100;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Heading */}
      <Typography variant="h6" className="text-base font-bold text-gray-900 mb-6">
        Order Progress
      </Typography>
      
      {/* Show status message for cancelled/returned orders */}
      {(isCancelled || isReturned) && (
        <Box 
          className={`mb-4 p-3 rounded-lg text-sm font-medium ${
            isCancelled ? 'bg-red-50 text-red-700' : 'bg-orange-50 text-orange-700'
          }`}
        >
          Order Status: <span className="capitalize">{orderStatus}</span>
        </Box>
      )}
      
      {/* Icons with Labels - Above Progress Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
        {stages.map((stage, index) => {
          return (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              {/* Icon Circle - All light pink as per design */}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFE5F1', // Light pink background for all icons
                  mb: 1,
                }}
              >
                <img 
                  src={stage.image} 
                  alt={stage.name}
                  style={{ width: 28, height: 28, objectFit: 'contain' }}
                />
              </Box>
              {/* Label */}
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.75rem',
                  color: '#1A1A1A', // Black text for all labels
                  textAlign: 'center',
                  fontWeight: 400,
                }}
              >
                {stage.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
      
      {/* Progress Bar - Below Icons with white circular slider */}
      <Box sx={{ width: '100%', position: 'relative', mt: 1 }}>
        {/* Background progress bar */}
        <LinearProgress 
          variant="determinate" 
          value={progressPercentage}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: isCancelled || isReturned ? '#9e9e9e' : '#F8069D',
              borderRadius: 2,
            },
          }}
        />
        {/* White circular slider handle */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: `${progressPercentage}%`,
            transform: 'translate(-50%, -50%)',
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '2px solid #F8069D',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: 1,
          }}
        />
      </Box>
    </div>
  );
};

export default OrderProgressCard;

