import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';

const Loader = () => {
  const { isLoading, loadingMessage } = useAppSelector((state) => state.loader);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-center justify-center z-[9999]">
      <CircularProgress
        size={60}
        sx={{
          color: '#ec4899', // pink-500 - MUI component color prop
        }}
        className="mb-2"
      />
      {loadingMessage && (
        <p className="text-white mt-2 font-medium text-base">
          {loadingMessage}
        </p>
      )}
    </div>
  );
};

export default Loader;

