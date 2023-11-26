import { SignUpType } from '@/validators/signup.validator';
import useSWR from 'swr';
import { ModifyProfileType } from '@/validators/modifyProfile.validator';
import { CreatePlantValidatorType } from '@/validators/createPlant.validator';

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

export const createUser = async (data: SignUpType) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return response;
};

export const useGetAllPlants = () => {
  const { data, isLoading, error, mutate } = useSWR('/api/plants', fetcher);

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export const useGetOnePlant = (id: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/plants/${id}`,
    fetcher,
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export const createNewPlant = async (data: CreatePlantValidatorType) => {
  const response = await fetch('/api/plants', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return response;
};

export const updateUser = async (data: ModifyProfileType) => {
  const response = await fetch('/api/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return response;
};

export const deleteUser = async () => {
  const response = await fetch('/api/auth/profile', {
    method: 'DELETE',
  });

  return response;
};

export const useGetPlantHistoric = (id: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/plants/${id}/historic`,
    fetcher,
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
