import React, { useState } from "react";
import { AUTH_TOKEN_NAME } from "../../constants";
import { AuthToken } from "./types";

const useAuthToken = () => {
  const getAuthToken = (): AuthToken | null => {
    const sessionToken = localStorage.getItem(AUTH_TOKEN_NAME);

    if (!sessionToken) return null;

    return JSON.parse(sessionToken);
  };

  const [authToken, setAuthToken] = useState(getAuthToken());

  const saveAuthToken = (authToken: AuthToken): void => {
    localStorage.setItem(AUTH_TOKEN_NAME, JSON.stringify(authToken));
    setAuthToken(authToken);
  };

  return {
    authToken,
    setAuthToken: saveAuthToken,
  };
};

export default useAuthToken;
