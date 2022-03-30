import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoModel from "core/models/video";
import useApi from "core/hooks/api/useApi";

const Video = () => {
  const { slug } = useParams();
  const { fetchVideo } = useApi();
  const [video, setVideo] = useState<VideoModel | null>(null);
  const [error, setError] = useState<any>(null);

  const fetch = async (slug: string | undefined) => {
    if (!slug) {
      return;
    }

    try {
      const video = await fetchVideo(slug);
      setVideo(video);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetch(slug);
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!video) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1>{video.title}</h1>
    </div>
  );
};

export default Video;
