// import useApi from '@/hooks/useApi';
import projectsData from '@/public/data/completedProjects.json'

export default function useCompletedProjects() {
    // const { data, error, loading } = useApi("completedProjects", "GET");
    // const projects = data && data.data ? data.data : [];
    // return { projects, error, loading };
    return { projects: projectsData , error: null, loading: false };
}
