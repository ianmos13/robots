import { useApiCache } from './useApiCache';
import { useSortedItems } from './useSortedItems';

export default function useNews() {
  const { data, error, loading } = useApiCache("news", "GET");
  const news = data && data.data ? data.data : [];
  const filteredNews = news.filter(item => item.type === "news");

 
  const sortedNews = useSortedItems(filteredNews);

  return { news: sortedNews, error, loading };
}
