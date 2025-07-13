"use client";

import React, { useState } from "react";
import AddPost from "../components/AddPost";

export default function AddPage() {
  const [showAddPost, setShowAddPost] = useState(true);

  return (
    <>
      {showAddPost && (
        <AddPost
          onClose={() => {
            setShowAddPost(false);
          }}
        />
      )}
    </>
  );
}
