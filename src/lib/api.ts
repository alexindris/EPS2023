import { LoginValidatorType } from '@/validators/login.validator';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetAllFiles = () => {
  const { data, isLoading, error, mutate } = useSWR('/api/files', fetcher);

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export const useGetSpecificFile = (id: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/files/${id}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export const createUser = async (data: LoginValidatorType) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return response.json();
};
