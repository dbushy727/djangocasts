import useAxios from "core/hooks/useAxios";
import Collection from "core/models/collection";

const useCollections = () => {
  const { axios } = useAxios();

  const fetchCollection = async (slug: string): Promise<Collection> => {
    const response = await axios.get(`collections/${slug}`);
    return response.data;
  }

  const fetchCollections = async (): Promise<Collection[]> => {
    const response = await axios.get(`collections/`);
    return response.data;
  }

  return {
    fetchCollection,
    fetchCollections,
  };
};

export default useCollections;
