import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useApi from "@/hooks/useApi";
import { setProducts } from '@/redux/features/productsSlice';

export default function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products?.products || []); 
  const { data, error, loading } = useApi("product", "GET");

  useEffect(() => {
    if (data && !products.length) { 
      dispatch(setProducts(data.data)); 
    }
  }, [data, dispatch, products.length]);

  
  if (products.length) {
    return { products, error: null, loading: false };
  }

  
  return { products: data?.data || [], error, loading };
}