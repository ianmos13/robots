import useApi from '@/hooks/useApi';
// import categories from '@/public/data/products-categories.json'

export default function useCategories() {
    const { data, error, loading } = useApi("categories", "GET");
    const categories = data && data.data ? data.data : [];
    return { categories, error, loading };
    // return { categories, error: null, loading: false };
}
