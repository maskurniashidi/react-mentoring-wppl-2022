import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes/Routes";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Register from "./components/Register";
import DetailPost from "./components/DetailPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes => hanya bisa diakses ketika belum login*/}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        {/* private routes => hanya bisa diakses ketika sudah login */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:id"
          element={
            <PrivateRoute>
              <DetailPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
