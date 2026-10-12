import React from "react";
import { Route, useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile: {userId || "(no id)"}</h1>;
}

export const routes = [
  { path: "/", element: <h1>Home Page</h1> },
  { path: "/products", element: <h1>Products Page</h1> },
  { path: "/about", element: <h1>About Page</h1> },
  { path: "/contact", element: <h1>Contact Page</h1> },
  { path: "/users/:userId?", element: <UserProfile /> },
];

export const renderRoutes = () =>
  routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));