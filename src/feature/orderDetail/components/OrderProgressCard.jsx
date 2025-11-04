import orderedImage from '../../../assets/ordered.png';
import dispatchedImage from '../../../assets/dispatched.png';
import outForDeliveryImage from '../../../assets/outofdelivery.png';
import deliveredImage from '../../../assets/delivered.png';

const OrderProgressCard = () => {
  const currentStage = 'Ordered'; // Change this to control progress

  const stages = [
    { name: 'Ordered', image: orderedImage, completed: true },
    { name: 'Dispatched', image: dispatchedImage, completed: false },
    { name: 'Out for delivery', image: outForDeliveryImage, completed: false },
    { name: 'Delivered', image: deliveredImage, completed: false },
  ];

  const getCurrentStageIndex = () => {
    return stages.findIndex(stage => stage.name === currentStage);
  };

  const currentIndex = getCurrentStageIndex();

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-base font-bold text-gray-900 mb-6">Order Progress</h3>
      
      {/* Progress Bar */}
      <div className="relative mb-8">
        {/* Background line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200"></div>
        
        {/* Progress line */}
        <div 
          className="absolute top-6 left-0 h-1 bg-[#F8069D] transition-all"
          style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
        ></div>

        {/* Stages */}
        <div className="relative flex justify-between">
          {stages.map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  index <= currentIndex ? 'bg-[#F8069D]' : 'bg-gray-200'
                }`}>
                  <img 
                    src={stage.image} 
                    alt={stage.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {index <= currentIndex && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#F8069D] rounded-full border-2 border-white"></div>
                )}
              </div>
              <span className="mt-2 text-xs text-gray-600 text-center">{stage.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderProgressCard;

