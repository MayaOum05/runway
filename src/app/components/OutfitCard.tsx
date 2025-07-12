import React from 'react';
import styles from './OutfitCard.module.css';

type Comment = {
  username: string;
  text: string;
};

type OutfitCardProps = {
  username: string;
  style: string;
  imageUrl: string;
  items: string[];
  comments: Comment[];
};

export default function OutfitCard({ username, style, imageUrl, items, comments }: OutfitCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.styleTag}>{style}</span>
        <span>@{username}</span>
      </div>
      <img src={imageUrl} alt={style} className={styles.image} />
      <div className={styles.items}>
        {items.join(' | ')}
      </div>
      <div className={styles.comments}>
        {comments.map((comment, idx) => (
          <div key={idx}>
            <strong>@{comment.username}</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
}
