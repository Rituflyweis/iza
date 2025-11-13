import { useState } from 'react';
import ReviewsFeedbackHeader from './components/ReviewsFeedbackHeader';
import ReviewsFeedbackTable from './components/ReviewsFeedbackTable';
import ReviewDetailsModal from './components/ReviewDetailsModal';

const ReviewsFeedback = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewReview = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="">
      <ReviewsFeedbackHeader />
      <ReviewsFeedbackTable onViewReview={handleViewReview} />
      <ReviewDetailsModal open={isModalOpen} onClose={handleCloseModal} review={selectedReview} />
    </div>
  );
};

export default ReviewsFeedback;

