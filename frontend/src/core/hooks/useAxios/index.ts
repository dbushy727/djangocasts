import axios from "axios";
import React, { useMemo } from "react";
import useAuthToken from "../../../auth/hooks/useAuthToken";

const useAxios = () => {
  const { authToken } = useAuthToken();

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: "http://localhost:8000/",
        timeout: 3000,
        headers: {
          Authorization: `Token ${authToken?.token}`,
        },
      }),
    [authToken]
  );

  return {
    axios: axiosInstance,
  };
};

export default useAxios;
