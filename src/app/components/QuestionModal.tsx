"use client";
import React, { useState, useEffect, useRef } from "react";

interface Reply {
  id: string;
  username: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  replies: Reply[];
}

interface QuestionModalProps {
  question: Question | null;
  onClose: () => void;
  onAddReply: (questionId: string, replyText: string) => void;
}

export default function QuestionModal({ question, onClose, onAddReply }: QuestionModalProps) {
  const [replyText, setReplyText] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!question) return null;

  const handleSubmit = () => {
    if (replyText.trim()) {
      onAddReply(question.id, replyText.trim());
      setReplyText("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "white",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "400px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h3>Question</h3>
        <p>{question.text}</p>
        <h4>Replies</h4>
        {question.replies.length === 0 ? (
          <p>No replies yet</p>
        ) : (
          <ul>
            {question.replies.map((r) => (
              <li key={r.id}><b>@{r.username}:</b> {r.text}</li>
            ))}
          </ul>
        )}
        <input
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={e => setReplyText(e.target.value)}
          onKeyDown={e => { if(e.key === "Enter") { e.preventDefault(); handleSubmit(); } }}
          style={{ width: "100%", marginTop: 10, padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
        />
        <button onClick={handleSubmit} style={{ marginTop: 10 }}>Submit Reply</button>
        <button onClick={onClose} style={{ marginTop: 10, marginLeft: 10 }}>Close</button>
      </div>
    </div>
  );
}
