"use client";
import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";  
import "./Posts.css";
import Navbar from "./Navbar";

interface Comment {
  username: string;
  text: string;
}

interface Post {
  id: string;
  username: string;
  imageUrl: string;
  profileImageUrl?: string;
  items?: string[];
  comments: Comment[];
  createdAt: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [itemsExpanded, setItemsExpanded] = useState<{ [key: string]: boolean }>({});
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: "1",
        username: "@just.clari1215",
        profileImageUrl: "/images/hellokitty.jpg",
        items: ["Lipstick: ELF", "Eyeliner: Maybeline", "Foundation: FitME"],
        imageUrl: "/images/glam.jpg",
        comments: [
          { username: "@RiceyPoo", text: "Love this look!" },
          { username: "@Trinkey", text: "Where did you get that lipstick?" }
        ],
        createdAt: "2025-07-12T19:30:00Z",
      },
      {
        id: "2",
        username: "@pluto_a_planet",
        profileImageUrl: "/images/keroppi.jpg",
        items: ["Shein | Brown Tube-Top", "H&M | Cargo Skirt", "Gucci | Tote Bag"],
        imageUrl: "/images/summer.jpg",
        comments: [
          { username: "@FashionLover", text: "So cute!" },
          { username: "@LiloandStitch", text: "Perfect for summer!" }
        ],
        createdAt: "2025-07-11T15:00:00Z",
      },
    ];
    const savedPosts = JSON.parse(localStorage.getItem("addedPosts") || "[]");
    setPosts([...savedPosts, ...mockPosts]);
  }, []);

  const toggleFavorite = (postId: string) => {
    setFavorites(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const reloadPosts = () => {
    const savedPosts = JSON.parse(localStorage.getItem("addedPosts") || "[]");
    const mockPosts: Post[] = posts.filter(p => p.id === "1" || p.id === "2");
    setPosts([...savedPosts, ...mockPosts]);
  };

  const deletePost = (postId: string) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);

    const savedPosts = JSON.parse(localStorage.getItem("addedPosts") || "[]");
    const updatedSavedPosts = savedPosts.filter((p: Post) => p.id !== postId);
    localStorage.setItem("addedPosts", JSON.stringify(updatedSavedPosts));
  };

  return (
    <div className="posts-container-wrapper">


      {showAddPost && (
        <AddPost
          onClose={() => {
            setShowAddPost(false);
            reloadPosts();
          }}
        />
      )}

      <div className="posts-container">
        {posts.map(post => {
          const isItemsExpanded = itemsExpanded[post.id] ?? false;
          const visibleItems = post.items
            ? (isItemsExpanded ? post.items : post.items.slice(0, 2))
            : [];
          const isFavorited = favorites[post.id] ?? false;

          return (
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
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorite(post.id)}
                  aria-label={isFavorited ? "Unfavorite" : "Favorite"}
                >
                  <img
                    src={isFavorited ? "/images/favorited.png" : "/images/favorite.png"}
                    alt={isFavorited ? "Favorited" : "Not Favorited"}
                    className="favorite-icon"
                  />
                </button>
              </div>

              {post.username === "@You" && (
                <button
                  className="delete-post-btn"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              )}

              {post.items && post.items.length > 0 && (
                <>
                  <ul className="post-items-list">
                    {visibleItems.map((item, idx) => (
                      <li key={idx} className="post-item">{item}</li>
                    ))}
                  </ul>
                  {post.items.length > 2 && (
                    <button
                      className="toggle-comments-btn"
                      onClick={() =>
                        setItemsExpanded(prev => ({
                          ...prev,
                          [post.id]: !prev[post.id]
                        }))
                      }
                    >
                      {isItemsExpanded ? "Hide items" : "More items"}
                    </button>
                  )}
                  <hr className="divider" />
                </>
              )}

              {post.comments && post.comments.length > 0 && (
                <div className="post-comments-section">
                  <button
                    className="toggle-comments-btn"
                    onClick={() =>
                      setExpandedPostId(prev => (prev === post.id ? null : post.id))
                    }
                  >
                    {expandedPostId === post.id ? "Hide comments" : "View comments"}
                  </button>
                  {expandedPostId === post.id && (
                    <ul className="post-comments-list">
                      {post.comments.map((comment, idx) => (
                        <li key={idx} className="post-comment">
                          <span className="comment-username">{comment.username}:</span> {comment.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
