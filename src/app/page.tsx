"use client";

import React from 'react';

// components
import Auth from './components/Auth'; 
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <main>
      <div className="phone-frame">
        <div className="phone-screen">
          <Auth />
        </div>
        <Navbar onAddPostClick={() => {}} />
      </div>
    </main>
  );
}
