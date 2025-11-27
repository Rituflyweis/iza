import toast from 'react-hot-toast';

/**
 * Custom hook for displaying toast notifications
 * @returns {Object} - Object with toast methods
 * 
 * @example
 * const { showSuccess, showError, showLoading } = useToast();
 * 
 * showSuccess('User created successfully!');
 * showError('Something went wrong');
 * const toastId = showLoading('Processing...');
 * toast.dismiss(toastId);
 */
export const useToast = () => {
  const showSuccess = (message) => {
    return toast.success(message, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10b981',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
      },
    });
  };

  const showError = (message) => {
    return toast.error(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#ef4444',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
      },
    });
  };

  const showLoading = (message = 'Loading...') => {
    return toast.loading(message, {
      position: 'top-right',
      style: {
        background: '#3b82f6',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
      },
    });
  };

  const showInfo = (message) => {
    return toast(message, {
      duration: 3000,
      position: 'top-right',
      icon: 'ℹ️',
      style: {
        background: '#3b82f6',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '8px',
      },
    });
  };

  const dismiss = (toastId) => {
    toast.dismiss(toastId);
  };

  return {
    showSuccess,
    showError,
    showLoading,
    showInfo,
    dismiss,
  };
};

export default useToast;


