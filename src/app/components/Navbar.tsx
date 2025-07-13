"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./Navbar.css";

export default function Navbar({ onAddPostClick }: { onAddPostClick: () => void }) {
  const router = useRouter();

  return (
    <div className="navbar">
      <button className="nav-button" onClick={() => router.push("/")}>
        <img src="/images/home.png" alt="Home" className="nav-icon" />
      </button>
      <button className="nav-button" onClick={() => router.push("/search")}>
        <img src="/images/search.png" alt="Search" className="nav-icon" />
      </button>

      <button className="nav-button" onClick={onAddPostClick}>
        <img src="/images/plus.png" alt="Add Post" className="nav-icon" />
      </button>
      <button className="nav-button" onClick={() => router.push("/auth")}>
      Logout
      </button>
    </div>
  );
}
