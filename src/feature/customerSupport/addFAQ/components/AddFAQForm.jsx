import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddFAQForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  // Sample FAQ data - in real app, fetch by id if editing
  const sampleFAQ = {
    id: 1,
    question: 'How to book salon order?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum. Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum.',
  };

  const [formData, setFormData] = useState({
    question: '',
    answer: '',
  });

  useEffect(() => {
    if (isEdit && id) {
      // In real app, fetch FAQ by id
      // For now, use sample data
      setFormData({
        question: sampleFAQ.question,
        answer: sampleFAQ.answer,
      });
    }
  }, [id, isEdit]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit ? 'Update FAQ:' : 'Add FAQ:', formData);
    // Implement save logic here
    navigate('/customer-support');
  };

  const handleCancel = () => {
    navigate('/customer-support');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-6">
        {/* Question Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question
          </label>
          <input
            type="text"
            value={formData.question}
            onChange={handleChange('question')}
            placeholder="Enter question"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            required
          />
        </div>

        {/* Answer Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Answer
          </label>
          <textarea
            value={formData.answer}
            onChange={handleChange('answer')}
            placeholder="Enter answer"
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 bg-white border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
          >
            {isEdit ? 'UPDATE' : 'ADD'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddFAQForm;




