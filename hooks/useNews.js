import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useApi from '@/hooks/useApi';
import { setNews } from '@/redux/features/newsSlice'; 

export default function useNews() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news?.news || []); 
  const { data, error, loading } = useApi("news", "GET");

  useEffect(() => {
    if (data && !news.length) { 
      dispatch(setNews(data.data)); 
    }
  }, [data, dispatch, news.length]);

  const filteredNews = news.filter((item) => item.type === "news");

 
  if (news.length) {
    return { news: filteredNews, error: null, loading: false };
  }

  
  return { news: data?.data ? data.data.filter((item) => item.type === "news") : [], error, loading };
}