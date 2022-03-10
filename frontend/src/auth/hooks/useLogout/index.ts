import React, { useState } from "react";
import { AUTH_TOKEN_NAME } from "../../constants";

const useLogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const logout = () => {
    sessionStorage.removeItem(AUTH_TOKEN_NAME);
    setIsLoggedOut(true);
  };

  return { logout };
};

export default useLogout;
