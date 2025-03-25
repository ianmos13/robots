import { useApiCache } from './useApiCache';
// import { useSortedItems } from './useSortedItems';

export default function useBlog() {
  const { data, error, loading } = useApiCache("news?order=desc", "GET");
  const items = data && data.data ? data.data : [];
  const filteredItems = items.filter((item) => item.type === "blog");

  // const sortedItems = useSortedItems(filteredItems);

  return { blog: filteredItems, error, loading };
}
