import React, { useEffect, useState } from "react";
import useCollections from "core/hooks/api/useCollections";
import useVideos from "core/hooks/api/useVideos";
import Collection from "core/models/collection";
import Video from "core/models/video";

const Homepage = () => {
  const { fetchVideos } = useVideos();
  const { fetchCollections } = useCollections();
  const [videos, setVideos] = useState<Video[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  const fetch = async () => {
    const videos = await fetchVideos();
    const collections = await fetchCollections();
    setVideos(videos);
    setCollections(collections);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>Welcome to Djangocasts!</h1>
      <div>
        <h2>Latest Videos</h2>
        {videos.map(video => (<p>{video.title}</p>))}
      </div>
      <div>
        <h2>Latest Collections</h2>
        {collections.map(collection => (<p>{collection.title}</p>))}
      </div>
    </>
  );
};

export default Homepage;
