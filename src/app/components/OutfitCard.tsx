import React from "react";

type OutfitCardProps = {
    username: string;
    style: string;
    imageUrl: string;
    items: string[];
    comments: { username: string; text: string } [];
};

export default function OutfitCard( { username, style, imageUrl, items, comments }: OutfitCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4">
      <div className="text-center font-semibold mb-2">{style}</div>
      <img src={imageUrl} alt={style} className="rounded" />
      <div className="text-sm mt-2 text-gray-600">{items.join(' | ')}</div>
      <div className="mt-2">
        {comments.map((comment, idx) => (
          <div key={idx}>
            <span className="font-semibold">@{comment.username}</span> {comment.text}
          </div>
        ))}
      </div>
    </div>>
    );
}
