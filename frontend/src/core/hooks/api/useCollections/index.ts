import useAxios from "core/hooks/useAxios";

const useCollections = () => {
  const { axios } = useAxios();

  const fetchCollection = async (slug: string) => await axios.get(`collections/${slug}`);
  const fetchCollections = async () => await axios.get(`collections`);

  return {
    fetchCollection,
    fetchCollections
  };
};

export default useCollections;
