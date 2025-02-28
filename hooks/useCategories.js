import useApi from '@/hooks/useApi';
import { buildTree } from "@/utils/buildCategoryTree";

export default function useCategories(isAll) {
    const { data, error, loading } = useApi("categories", "GET");
    const initialCategories = data && data.data ? data.data : [];
    const categories = isAll ? initialCategories : buildTree(initialCategories)

    return { categories, error, loading };
}
