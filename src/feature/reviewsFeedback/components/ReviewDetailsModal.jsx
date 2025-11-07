import { Dialog, IconButton, Slide } from '@mui/material';
import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReviewDetailsModal = ({ open, onClose, review }) => {
  if (!review) return null;

  const ratingDistribution = [5, 4, 3, 2, 1].map((score) => ({
    score,
    value: score === Number(review.ratingValue) ? 100 : 0,
  }));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      PaperProps={{
        className: 'rounded-2xl shadow-lg',
        sx: { overflow: 'visible', maxHeight: '90vh' },
      }}
    >
      <div className="relative bg-white rounded-2xl p-8 max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <IconButton
          onClick={onClose}
          className="!absolute !right-4 !top-4 !bg-gray-100 hover:!bg-gray-200"
          size="small"
        >
          <Icon icon="mdi:close" width={18} height={18} />
        </IconButton>

        {/* Header */}
        <h2 className="text-center text-pink-600 font-semibold text-lg mb-2">
          Review Details
        </h2>
<div className="mb-6 grid md:grid-cols-2 gap-8 ">
        {/* Rating */}
        <div className="mb-6 grid md:grid-cols-2 ">
          <div>
          <span className="text-3xl font-semibold text-gray-900">{review.ratingValue}</span>
          <div className="flex  gap-0.5 mt-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                icon={star <= review.ratingValue ? 'mdi:star' : 'mdi:star-outline'}
                width={18}
                height={18}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">{review.reviewCount} review</p>
          </div>
            {/* Rating Distribution */}
        <div className="space-y-2 mb-6">
          {ratingDistribution.map((item) => (
            <div key={item.score} className="flex items-center gap-3 text-xs text-gray-700">
              <span className="w-5 text-right font-medium">{item.score}</span>
              <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-800 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <span className="w-8 text-right">{item.value}%</span>
            </div>
          ))}
        </div>
           {/* Review Text */}
       <div className="mb-8">
  <h3 className="text-base font-semibold text-gray-900 mb-2">{review.title}</h3>
  <p className="text-sm text-gray-700 leading-relaxed">
    {review.review}
  </p>
  <p className="text-xs text-blue-500 mt-2">
    Submitted on {review.date}
  </p>
</div>
        </div>

<div className="mb-8">
  <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
    <p className="font-semibold text-gray-900">Submitted By:</p>
    <p>{review.submittedBy}</p>

    <p className="font-semibold text-gray-900">Vendor Name:</p>
    <p>{review.vendorName}</p>

    <p className="font-semibold text-gray-900">Email:</p>
    <p>{review.email}</p>

    <p className="font-semibold text-gray-900">Phone:</p>
    <p>{review.phone}</p>

    <p className="font-semibold text-gray-900">Address:</p>
    <p>{review.address}</p>

    <p className="font-semibold text-gray-900">Products Offered:</p>
    <p>{review.productsOffered}</p>

    <p className="font-semibold text-gray-900">Website/Instagram:</p>
    <p>{review.website}</p>

    <p className="font-semibold text-gray-900">Uploaded Form:</p>
    <p>{review.uploadedForm}</p>

    <p className="font-semibold text-gray-900">Admin Notes:</p>
    <p>{review.adminNotes}</p>

    <p className="font-semibold text-gray-900">Application Status:</p>
    <p>{review.applicationStatus}</p>
  </div>
</div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button className="px-8 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600">
            Approve
          </button>
          <button className="px-8 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ReviewDetailsModal;
