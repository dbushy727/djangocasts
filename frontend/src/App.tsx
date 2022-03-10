import React from "react";
import Login from "./auth/components/login";
import useAuthToken from "./auth/hooks/useAuthToken";
import Home from "./dashboard/components/home";

function App() {
  const { authToken, setAuthToken } = useAuthToken();

  if (!authToken) {
    return <Login setAuthToken={setAuthToken} />;
  }

  return <Home />;
}

export default App;
