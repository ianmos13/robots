import useApi from '@/hooks/useApi';
import { useApiCache } from './useApiCache'
// import newsData from "@/public/data/news.json";

export default function useNews() {
    const { data, error, loading } = useApiCache("news", "GET");
    const news = data && data.data ? data.data : [];
    const filteredNews = news.filter((item) => item.type === "news")
    return { news: filteredNews, error, loading };
    // return { news: newsData , error: null, loading: false };
}