import React, { useCallback, useEffect, useState } from "react";
import Collection from "core/models/collection";
import Video from "core/models/video";
import useApi from "core/hooks/api/useApi";

const Homepage = () => {
  const { fetchVideos, fetchCollections } = useApi();

  const [videos, setVideos] = useState<Video[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  const fetch = useCallback(async () => {
    const videos = await fetchVideos();
    const collections = await fetchCollections();
    setVideos(videos);
    setCollections(collections);
  }, [fetchVideos, fetchCollections, setVideos, setCollections]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>Welcome to Djangocasts!</h1>
      <div>
        <h2>Latest Videos</h2>
        <ul>
          {videos.map(video => (<li><a href={`/videos/${video.slug}`}>{video.title}</a></li>))}
        </ul>
      </div>
      <div>
        <h2>Latest Collections</h2>
        <ul>
          {collections.map(collection => (<li><a href={`/collections/${collection.slug}`}>{collection.title}</a></li>))}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
