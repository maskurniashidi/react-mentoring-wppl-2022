import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export function PublicRoute({ children }) {
  const auth = useAuth();
  return auth ? <Navigate to="/dashboard" /> : children;
}
