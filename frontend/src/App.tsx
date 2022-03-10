import React from "react";
import Collections from "collections/components/collections";
import Homepage from "homepage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useAuthToken from "./auth/hooks/useAuthToken";
import Collection from "collections/components/collection";
import Login from "auth/components/login";
import Video from "videos/components/video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/videos/:slug"
        element={
          <ProtectedRoute>
            <Video />
          </ProtectedRoute>
        }
      />
      <Route path="/collections">
        <Route
          index
          element={
            <ProtectedRoute>
              <Collections />
            </ProtectedRoute>
          }
        />
        <Route
          path=":slug"
          element={
            <ProtectedRoute>
              <Collection />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

const ProtectedRoute = ({ children }: { children: any }) => {
  const { authToken } = useAuthToken();
  const location = useLocation();

  if (!authToken) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
};

export default App;
