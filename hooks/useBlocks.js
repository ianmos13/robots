
import { useApiCache } from './useApiCache'


export default function useBlocks() {

  const { data, error, loading } = useApiCache("blocks", "GET");
  const blocks = data && data.data ? data.data : [];

  return { blocks, error, loading };

}