import useApi from '@/hooks/useApi';

export default function useBlog() {
    const { data, error, loading } = useApi("news", "GET");
    const items = data && data.data ? data.data : [];
    const filteredItems = items.filter((item) => item.type === "blog")
    return { blog: filteredItems, error, loading };
}