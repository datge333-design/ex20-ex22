import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { renderRoutes } from "./routes";
import NavigationMenu from "./NavigationMenu";

const Ex20 = () => (
  <Router>
    <div>
      <NavigationMenu />
      <Routes>{renderRoutes()}</Routes>
    </div>
  </Router>
);

export default Ex20;