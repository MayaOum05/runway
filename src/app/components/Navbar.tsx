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
        aria-label="Go to Search"
      >
        <img src="/images/search.png" alt="Search" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/add")}  
        aria-label="Go to Add"
      >
        <img src="/images/plus.png" alt="Add" className="nav-icon" />
      </button>

      <button
        className="nav-button"
        onClick={() => router.push("/favorites")} 
        aria-label="Go to Favorites"
      >
        <img src="/images/favorited.png" alt="Favorites" className="nav-icon" />
      </button>
    </div>
  );
}

