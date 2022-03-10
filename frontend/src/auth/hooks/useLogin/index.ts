import React from "react";
import axios from "axios";
import { AuthCredentials } from "./types";

const useLogin = () => {
  const login = async (credentials: AuthCredentials) => {
    const response = await axios.post(
      "http://localhost:8000/auth/token",
      credentials
    );

    return response.data;
  };

  return { login };
};

export default useLogin;
