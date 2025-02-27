import useApi from '@/hooks/useApi';
// import projectsData from '@/public/data/completedProjects.json'

export default function useCompletedProjects() {
    const { data, error, loading } = useApi("news", "GET");
    const news = data && data.data ? data.data : [];
    const filteredProjects = news.filter((item) => item.type === "project")
    return { projects: filteredProjects, error, loading };
    // return { projects: projectsData , error: null, loading: false };
}
