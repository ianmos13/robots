// import useApi from "@/hooks/useApi";
import { useApiCache } from './useApiCache'
// import robotsList from '@/public/data/products.json'

export default function useProducts() {
  // const { data, error, loading } = useApi("product", "GET");
  const { data, error, loading } = useApiCache("product", "GET");
  const products = data && data.data ? data.data : [];

  return { products, error, loading };
  // return { products: robotsList, error: null, loading: false };
}