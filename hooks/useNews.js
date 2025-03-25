import { useApiCache } from './useApiCache';
// import { useSortedItems } from './useSortedItems';

export default function useNews() {
  const { data, error, loading } = useApiCache("news?order=desc", "GET");
  const news = data && data.data ? data.data : [];
  const filteredNews = news.filter(item => item.type === "news");

 

  
  return { news: filteredNews, error, loading };
}
