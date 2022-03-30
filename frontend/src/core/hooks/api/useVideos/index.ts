import useAxios from "core/hooks/useAxios";

const useVideos = () => {
  const { axios } = useAxios();

  const fetchVideo = async (slug: string) => await axios.get(`videos/${slug}`);
  const fetchVideos = async () => await axios.get(`videos`);

  return {
    fetchVideo,
    fetchVideos
  };
};

export default useVideos;
