import { useParams } from 'react-router-dom';
import AddFAQHeader from './components/AddFAQHeader';
import AddFAQForm from './components/AddFAQForm';

const AddFAQ = () => {
  const { id } = useParams();
  const isEdit = !!id;

  return (
    <div className="w-full">
      <AddFAQHeader isEdit={isEdit} />
      <AddFAQForm />
    </div>
  );
};

export default AddFAQ;








