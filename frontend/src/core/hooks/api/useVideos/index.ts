import useAxios from "core/hooks/useAxios";
import Video from "core/models/video";

const useVideos = () => {
  const { axios } = useAxios();

  const fetchVideo = async (slug: string): Promise<Video> => {
    const response = await axios.get(`videos/${slug}`);
    return response.data;
  }
  const fetchVideos = async (): Promise<Video[]> => {
    const response = await axios.get(`videos/`);
    return response.data;
  }

  return {
    fetchVideo,
    fetchVideos
  };
};

export default useVideos;
