import useApi from '@/hooks/useApi';
import { useApiCache } from './useApiCache'

export default function useBlog() {
    const { data, error, loading } = useApiCache("news", "GET");
    const items = data && data.data ? data.data : [];
    const filteredItems = items.filter((item) => item.type === "blog")
    return { blog: filteredItems, error, loading };
}