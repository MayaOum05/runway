"use client";
import React from "react";
import { useFavorites } from "./FavoriteContext";

interface Post {
  id: string;
  username: string;
  imageUrl: string;
  profileImageUrl?: string;
  items?: string[];
  comments: { username: string; text: string }[];
  createdAt: string;
}

const allPosts: Post[] = [
];

export default function Favorites() {
  const { favorites } = useFavorites();

  const favoritePosts = allPosts.filter(post => favorites.includes(post.id));

  return (
    <div className="favorites-container">
      <h2>Your Favorite Posts</h2>
      {favoritePosts.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoritePosts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-user-info">
              {post.profileImageUrl && (
                <img
                  src={post.profileImageUrl}
                  alt={`${post.username} profile`}
                  className="post-profile-pic"
                />
              )}
              <span className="post-username">{post.username}</span>
            </div>
            <div className="post-image-wrapper">
              <img src={post.imageUrl} alt="Post" className="post-image" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
