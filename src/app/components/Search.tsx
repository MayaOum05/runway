"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Search.css";

interface Post {
  id: string;
  username: string;
  imageUrl: string;
  profileImageUrl?: string;
  items?: string[];
  comments: Comment[];
}

interface Comment {
  username: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: "1",
        username: "@just.clari1215",
        profileImageUrl: "/images/hellokitty.jpg",
        items: ["Lipstick: ELF", "Eyeliner: Maybeline", "Foundation: FitME"],
        imageUrl: "/images/glam.jpg",
        comments: [],
      },
      {
        id: "2",
        username: "@pluto_a_planet",
        profileImageUrl: "/images/keroppi.jpg",
        items: ["Shein | Brown Tube-Top", "H&M | Cargo Skirt", "Gucci | Tote Bag"],
        imageUrl: "/images/summer.jpg",
        comments: [],
      },
    ];

    const mockQuestions: Question[] = [
      { id: "q1", text: "How to find the right foundation shade?" },
      { id: "q2", text: "Best budget-friendly lipsticks?" },
      { id: "q3", text: "How to style cargo skirts?" },
    ];

    setPosts(mockPosts);
    setFilteredPosts(mockPosts.slice(0, 4)); 
    setQuestions(mockQuestions);
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts.slice(0, 4));
      return;
    }
    const lower = searchTerm.toLowerCase();
    const filtered = posts.filter(post =>
      post.username.toLowerCase().includes(lower) ||
      post.items?.some(item => item.toLowerCase().includes(lower))
    );
    setFilteredPosts(filtered.slice(0, 4));
  }, [searchTerm, posts]);

  return (
    <div className="search-page">
      <div className="search-content">
        <input
          type="text"
          placeholder="Search posts..."
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-label="Search posts"
        />

        <div className="recommended-posts">
          {filteredPosts.map(post => (
            <div key={post.id} className="recommended-post-card">
              <img
                src={post.imageUrl}
                alt="Post"
                className="recommended-post-image"
              />
              <div className="recommended-post-username">{post.username}</div>
            </div>
          ))}
        </div>

        <div className="forum-search-section">
          <input
            type="text"
            placeholder="Got any fashion questions?"
            className="forum-search-input"
            aria-label="Search fashion questions"
          />

          <div className="suggested-questions">
            {questions.map(q => (
              <button
                key={q.id}
                className="suggested-question-btn"
                onClick={() => {
                  alert(`Go to thread: ${q.text}`);
                }}
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
