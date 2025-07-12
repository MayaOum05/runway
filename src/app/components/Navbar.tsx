import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Runway</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/home">Search</a></li>
        <li><a href="/about">Add</a></li>
        <li><a href="/contact">Favorite</a></li>
      </ul>
    </nav>
  );
}