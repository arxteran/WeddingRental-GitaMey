import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="wedding-title">Wedding Rental</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Produk
        </Link>
        <Link to="/about" className="nav-link">
          Tentang
        </Link>
      </nav>
    </header>
  );
};

export default Header;
