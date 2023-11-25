// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';

export const SendErrorToast = (text: string) => {
  return toast.error(text, {
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
