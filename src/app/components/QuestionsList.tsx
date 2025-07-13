"use client";
import React from "react";

interface Reply {
  id: string;
  username: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  username: string;
  replies: Reply[];
}

interface QuestionsListProps {
  questions: Question[];
  onDeleteQuestion: (id: string) => void;
  onQuestionClick: (question: Question) => void;
}

export default function QuestionsList({
  questions,
  onDeleteQuestion,
  onQuestionClick,
}: QuestionsListProps) {
  return (
    <div className="questions-list">
      {questions.map((q) => (
        <div
          key={q.id}
          className="question-btn"
          onClick={() => onQuestionClick(q)}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span>@{q.username}: {q.text}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteQuestion(q.id);
            }}
            style={{ marginLeft: 10, color: "red", cursor: "pointer" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
