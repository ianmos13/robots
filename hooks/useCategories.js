import useApi from '@/hooks/useApi';
// import categories from '@/public/data/products-categories.json'

export default function useCategories() {
    const { data, error, loading } = useApi("categories", "GET");
    const initialCategories = data && data.data ? data.data : [];
    const categories = initialCategories.map((category) => {
        return {...category, link: `/catalog?category=${category.key}`}
    })
    return { categories, error, loading };
    // const categories = productsCategories.map((category) => {
    //     return {...category, link: `/catalog?category=${category.key}`}
    // })
    // return { categories, error: null, loading: false };
}
