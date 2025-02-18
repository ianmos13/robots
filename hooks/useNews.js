
import useApi from '@/hooks/useApi';
// import newsData from "@/public/data/news.json";

export default function useNews() {
    const { data, error, loading } = useApi("news", "GET");
    const news = data && data.data ? data.data : [];
    return { news, error, loading };
    // return { news: newsData , error: null, loading: false };
}