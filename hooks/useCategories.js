
import {buildSimpleTree, buildTree} from "@/utils/buildCategoryTree";
import { useApiCache } from './useApiCache';

export default function useCategories(isAll) {
    const { data, error, loading } = useApiCache("categories", "GET");
    const initialCategories = data && data.data ? data.data : [];
    const categories = isAll ? buildSimpleTree(initialCategories) : buildTree(initialCategories)
    return { categories, error, loading };
}
