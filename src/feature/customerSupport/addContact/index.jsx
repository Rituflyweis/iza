import { useParams } from 'react-router-dom';
import AddContactHeader from './components/AddContactHeader';
import AddContactForm from './components/AddContactForm';

const AddContact = () => {
  const { id } = useParams();
  const isEdit = !!id;

  return (
    <div className="w-full">
      <AddContactHeader isEdit={isEdit} />
      <AddContactForm />
    </div>
  );
};

export default AddContact;






