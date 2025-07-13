"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <button
        className="nav-button"
        onClick={() => router.push("/search")}
        aria-label="Search"
      >
        <img src="/images/search.png" alt="Search" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/add")}
        aria-label="Add Post"
      >
        <img src="/images/plus.png" alt="Add" className="nav-icon" />
      </button>
      
      <button
        className="nav-button"
        onClick={() => router.push("/favorites")}
        aria-label="Favorites"
      >
        <img src="/images/favorited.png" alt="Favorites" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/profile")}
        aria-label="Profile"
      >
        <img src="/images/profile.png" alt="Profile" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/settings")}
        aria-label="Settings"
      >
        <img src="/images/settings.png" alt="Settings" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/login")}
        aria-label="Logout"
      >
        <img src="/images/logout.png" alt="Logout" className="nav-icon" />
      </button>
    </div>
  );
}
