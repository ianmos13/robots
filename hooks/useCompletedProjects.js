import { useApiCache } from './useApiCache';
import { useSortedItems } from './useSortedItems';

export default function useCompletedProjects() {
  const { data, error, loading } = useApiCache("news", "GET");
  const news = data && data.data ? data.data : [];
  const filteredProjects = news.filter(item => item.type === "project");


  const sortedProjects = useSortedItems(filteredProjects);

  return { projects: sortedProjects, error, loading };
}
