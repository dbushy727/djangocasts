import React from "react";
import axios from "axios";
import { AuthCredentials } from "./types";
import useAuthToken from "../useAuthToken";
import { useLocation, useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setAuthToken } = useAuthToken();
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (credentials: AuthCredentials) => {
    const response = await axios.post(
      "http://localhost:8000/auth/token",
      credentials
    );

    const authToken = response.data;
    setAuthToken(authToken);

    // @ts-ignore
    const origin = location.state?.from?.pathname || "/collections";
    navigate(origin);
  };

  return { login };
};

export default useLogin;
