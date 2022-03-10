import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "core/hooks/useAxios";
import CollectionModel from "core/models/collection";

const Collection = () => {
  const { slug } = useParams();
  const { axios } = useAxios();
  const [collection, setCollection] = useState<CollectionModel | null>(null);
  const [error, setError] = useState<any>(null);

  const fetchCollection = async (slug: string | undefined) => {
    if (!slug) {
      return;
    }

    try {
      const response = await axios.get(`collections/${slug}`);
      setCollection(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCollection(slug);
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!collection) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1>{collection.title}</h1>

      <h3>Videos</h3>
      {collection.videos.map((video) => (
        <div>{video.title}</div>
      ))}
    </div>
  );
};

export default Collection;
