import React from "react";
import { AUTH_TOKEN_NAME } from "../../constants";

const useLogout = () => {
  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    // todo replace with router redirect
    window.location.reload();
  };

  return { logout };
};

export default useLogout;
