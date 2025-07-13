"use client";
import React, { useState } from "react";
import "./Search.css";
import Navbar from "./Navbar";
import QuestionsList from "./QuestionsList";
import QuestionModal from "./QuestionModal";


interface Post {
  id: string;
  username: string;
  imageUrl: string;
  profileImageUrl?: string;
  items?: string[];
  comments: { username: string; text: string }[];
  categories?: string[]; 
}


interface Question {
  id: string;
  text: string;
}




export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fashionQuestionsSearch, setFashionQuestionsSearch] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);


  const [questions, setQuestions] = useState<Question[]>([
    { id: "q1", text: "How do I style oversized jackets?" },
    { id: "q2", text: "What shoes go with midi skirts?" },
  ]);

  const recommendedPosts: Post[] = [
    {
      id: "1",
      username: "@Riceypoo",
      profileImageUrl: "/images/snoopy.jpg",
      imageUrl: "/images/casual.jpg",
      comments: [],
      categories: ["Tomboy"],
    },
    {
      id: "2",
      username: "@TrinkyWink",
      profileImageUrl: "/images/meow.jpg",
      imageUrl: "/images/gentle.jpg",
      comments: [],
      categories: ["Blush"],
    },
    {
      id: "3",
      username: "@ImBatman",
      profileImageUrl: "/images/toro.jpg",
      imageUrl: "/images/dark.jpg",
      comments: [],
      categories: ["Everyday"]
    },
    {
      id: "4",
      username: "@LiloandStitch",
      profileImageUrl: "/images/aliencat.jpg",
      imageUrl: "/images/grunge.jpg",
      comments: [],
      categories: ["Grunge"]
    },
    {
      id: "5",
      username: "@Bobo_TheDawg",
      profileImageUrl: "/images/pingu.jpg",
      imageUrl: "/images/gyaru.jpg",
      comments: [],
      categories: ["Gyaru"]
    },{
      id: "6",
      username: "@SunnySideUp",
      profileImageUrl: "/images/elephant.jpg",
      imageUrl: "/images/douyin.jpg",
      comments: [],
      categories: ["Grunge"]
    },
  ];

  const handleAddQuestion = () => {
    if (fashionQuestionsSearch.trim() === "") return;

    const newQuestion: Question = {
      id: `q${Date.now()}`,
      text: fashionQuestionsSearch.trim(),
      username: "You", 
      replies: [],
    };

    setQuestions(prev => [newQuestion, ...prev]);
    setFashionQuestionsSearch("");
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    if (selectedQuestion?.id === id) setSelectedQuestion(null);
  };

  const handleAddReply = (questionId: string, replyText: string) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === questionId
          ? {
              ...q,
              replies: [...q.replies, { id: `r${Date.now()}`, username: "You", text: replyText }],
            }
          : q
      )
    );
  };

  return (
    <div className="search-page">
      <div className="search-top-section">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="recommended-posts">
          {recommendedPosts.map((post) => (
            <div key={post.id} className="recommended-post-card">
              <div className="image-hover-wrapper">
                <img
                  src={post.imageUrl}
                  alt="Recommended post"
                  className="recommended-post-image"
                />
                <div className="overlay-text">{post.categories?.join(", ")}</div>
              </div>
              <div className="recommended-post-username">{post.username}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="search-bottom-section">
        <input
          type="text"
          placeholder="Got any fashion questions?"
          value={fashionQuestionsSearch}
          onChange={(e) => setFashionQuestionsSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddQuestion();
            }
          }}
          className="search-bar"
        />

        <QuestionsList
          questions={questions}
          onQuestionClick={setSelectedQuestion}
          onDeleteQuestion={handleDeleteQuestion}
        />
      </div>

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onAddReply={handleAddReply}
        />
      )}

      <Navbar />
    </div>
  );
}
