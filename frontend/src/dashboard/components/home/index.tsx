import React, { useEffect, useState } from "react";
import useAxios from "../../../core/hooks/useAxios";

interface Video {
  id: number;
  title: string;
}

const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const { axios } = useAxios();

  const fetchVideos = async () => {
    const response = await axios.get("videos");

    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {!videos.length && "... loading videos"}
      {videos.map((video) => (
        <div key={video.id}>{video.title}</div>
      ))}
    </div>
  );
};

export default Home;
