import React, { useEffect, useState } from "react";
import useLogout from "../../../auth/hooks/useLogout";
import useAxios from "../../../core/hooks/useAxios";

interface Video {
  id: number;
  title: string;
}

const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const { axios } = useAxios();
  const { logout } = useLogout();

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
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
