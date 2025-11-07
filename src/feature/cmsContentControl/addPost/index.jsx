import AddCMSPostHeader from './components/AddCMSPostHeader';
import AddCMSPostForm from './components/AddCMSPostForm';

const AddCMSPost = () => {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-8 space-y-6">
      <AddCMSPostHeader />
      <AddCMSPostForm />
    </div>
  );
};

export default AddCMSPost;

