import { useApiCache } from "./useApiCache";

export default function useBanner() {
  const { data, error, loading } = useApiCache("banners", "GET");
  const banner = data && data.data ? data.data : [];

  return { banner, error, loading };
}
