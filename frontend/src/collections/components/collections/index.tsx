import React, { useEffect, useState } from "react";
import useLogout from "auth/hooks/useLogout";
import useAxios from "core/hooks/useAxios";
import Collection from "core/models/collection";

const Collections = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const { axios } = useAxios();
  const { logout } = useLogout();

  const fetchCollections = async () => {
    const response = await axios.get("collections");

    setCollections(response.data);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div>
      {!collections.length && "... loading collections"}
      {collections.map((collection) => (
        <div key={collection.id}>
          <strong>{collection.title}</strong>
          <ul>
            {collection.videos.map((video) => (
              <li key={video.id}>{video.title}</li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Collections;
