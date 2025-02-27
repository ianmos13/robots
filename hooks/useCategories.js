import useApi from '@/hooks/useApi';
// import productsCategories from '@/public/data/products-categories.json'

export default function useCategories(type) {
    const { data, error, loading } = useApi("categories", "GET");
    const initialCategories = data && data.data ? data.data : [];
    let categories = type ? initialCategories.filter((category) => (category.type === type)) : initialCategories
    categories = categories.map((category) => {
        return {...category, link: `/catalog?category=${category.key}`}
    })
    return { categories, error, loading };
    // let categories = type ? productsCategories.filter((category) => (category.type === type)) : productsCategories
    // categories = categories.map((category) => {
    //         return {...category, link: `/catalog?category=${category.key}`}
    //     })
    // return { categories, error: null, loading: false };
}
