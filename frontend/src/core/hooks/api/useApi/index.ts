import useCollections from "../useCollections";
import useVideos from "../useVideos";

const useApi = () => {
    const { fetchCollection, fetchCollections} = useCollections();
    const { fetchVideo, fetchVideos} = useVideos();
    
    return {
        fetchCollection,
        fetchCollections,
        fetchVideo,
        fetchVideos,
    }
}

export default useApi;