"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";

export default function PostsPage() {
  const [showAddPost, setShowAddPost] = useState(false);

  return (
    <>
      <Navbar onAddPostClick={() => setShowAddPost(true)} />
      <Posts />
      {showAddPost && (
        <AddPost onClose={() => setShowAddPost(false)} />
      )}
    </>
  );
}