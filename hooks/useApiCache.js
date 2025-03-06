import { useQuery } from '@tanstack/react-query'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API
const API_AUTH = process.env.NEXT_PUBLIC_API_AUTH

const fetchData = async (endpoint, method) => {
	console.log('Сработал fetch')
	const response = await fetch(`${BASE_URL}/${endpoint}`, {
		method,
		headers: {
			Auth: API_AUTH,
			'Content-Type': 'application/json',
		},
	})
	return await response.json()
}

export function useApiCache(endpoint, method = 'GET') {
	const { isSuccess, data, error } = useQuery({
		queryKey: [`${endpoint}`],
		queryFn: () => {
			return fetchData(endpoint, method)
		},
		staleTime: 1000 * 60 * 15,
		gcTime: 1000 * 60 * 60,
		refetchOnMount: false,
	})
	return {
		data,
		loading: !isSuccess,
		error,
	}
}
