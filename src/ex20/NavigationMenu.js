import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
    <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
    <Link to="/users">Users</Link> | <Link to="/users/5">User 5</Link>
  </nav>
);

export default NavigationMenu;