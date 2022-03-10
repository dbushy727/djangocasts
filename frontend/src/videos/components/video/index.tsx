import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "core/hooks/useAxios";
import VideoModel from "core/models/video";

const Video = () => {
  const { slug } = useParams();
  const { axios } = useAxios();
  const [video, setVideo] = useState<VideoModel | null>(null);
  const [error, setError] = useState<any>(null);

  const fetchVideo = async (slug: string | undefined) => {
    if (!slug) {
      return;
    }

    try {
      const response = await axios.get(`videos/${slug}`);
      setVideo(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchVideo(slug);
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
