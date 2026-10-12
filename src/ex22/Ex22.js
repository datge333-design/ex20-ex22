import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => <div align="center">Home Component</div>;
const About = () => <div align="center">About Component</div>;
const Contact = () => <div align="center">Contact Component</div>;
const Profile = () => <div align="center">Profile Component</div>;

const CustomNavbar = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
    <Nav className="ms-auto" navbar>
      <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
      <NavItem><NavLink tag={Link} to="/about">About</NavLink></NavItem>
      <NavItem><NavLink tag={Link} to="/contact">Contact</NavLink></NavItem>
    </Nav>
  </Navbar>
);

const Ex22 = () => (
  <Router>
    <CustomNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default Ex22;