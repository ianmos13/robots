import { useQuery } from '@tanstack/react-query';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;
const API_AUTH = process.env.NEXT_PUBLIC_API_AUTH;

const fetchData = async (endpoint, method) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers: {
      Auth: API_AUTH,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error fetching data');
  }
  
  return response.json();
};

export function useApiCache(endpoint, method = 'GET') {

  const queryKey = [endpoint, method];
  
  const { data, error, isLoading, isError } = useQuery({
    queryKey,
    queryFn: () => fetchData(endpoint, method),
    staleTime: 1000 * 60 * 15,  
    cacheTime: 1000 * 60 * 60,    
    refetchOnMount: false,
  });
  
  return {
    data,
    error,
    loading: isLoading,
    isError,
  };
}
