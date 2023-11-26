// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';

export const SuccessToast = (text: string) => {
  return toast.success(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};