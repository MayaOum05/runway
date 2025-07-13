"use client";
import React, { useState, useRef, useEffect } from "react";
import "./AddPost.css";

export default function AddPost({ onClose }: { onClose: () => void }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [itemsText, setItemsText] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject("Failed to convert file");
        }
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleAddPost = async () => {
    if (!selectedFile || !itemsText.trim()) return;

    try {
      const base64Image = await fileToBase64(selectedFile);
      const items = itemsText.split(",").map(item => item.trim()).filter(Boolean);
      const newPost = {
        id: Date.now().toString(),
        imageUrl: base64Image,
        items,
        username: "@You",
        comments: [],
        createdAt: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem("addedPosts") || "[]");
      localStorage.setItem("addedPosts", JSON.stringify([newPost, ...existing]));
      onClose();
    } catch (error) {
      console.error("Error converting file:", error);
    }
  };

  return (
    <div className="addpost-overlay">
      <div className="addpost-modal" ref={modalRef}>
        <h3>Add New Post</h3>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {previewUrl && <img src={previewUrl} alt="Preview" className="preview-image" />}
        <input
          type="text"
          placeholder="Items separated by commas"
          value={itemsText}
          onChange={e => setItemsText(e.target.value)}
          className="items-input"
        />
        <button className="add-post-button" onClick={handleAddPost}>Post</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
