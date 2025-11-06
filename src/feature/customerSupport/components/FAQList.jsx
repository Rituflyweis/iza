import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const FAQList = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How to book salon order?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum. Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum.',
    },
    {
      id: 2,
      question: 'How to book salon order?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum. Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum.',
    },
    {
      id: 3,
      question: 'How to book salon order?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum. Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum.',
    },
    {
      id: 4,
      question: 'How to book salon order?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum. Lorem ipsum dolor sit amet consectetur. Id hendrerit bibendum.',
    },
  ]);

  const handleEdit = (id) => {
    navigate(`/customer-support/edit-faq/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs(faqs.filter((faq) => faq.id !== id));
      // Implement delete logic
    }
  };

  const handleAdd = () => {
    navigate('/customer-support/add-faq');
  };

  return (
    <div className="w-full">
      {/* Add Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors"
        >
          <Icon icon="mdi:plus" width={20} height={20} />
          <span>Add</span>
        </button>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-start justify-between gap-4"
          >
            {/* Question and Answer */}
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleEdit(faq.id)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-pink-600 text-gray-700 hover:bg-pink-50 transition-colors"
                aria-label="Edit FAQ"
              >
                <Icon icon="mdi:pencil" width={18} height={18} />
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-pink-600 text-gray-700 hover:bg-pink-50 transition-colors"
                aria-label="Delete FAQ"
              >
                <Icon icon="mdi:delete" width={18} height={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQList;

