"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface RoomLabelProps {
  label: string;
  targetPath: string;
}

export default function RoomLabel({ label, targetPath }: RoomLabelProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(targetPath);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'transparent',
        border: 'none',
        color: '#D8959B',
        fontWeight: 'bold',
        fontSize: '18px',
        cursor: 'pointer',
        padding: '8px 16px',
      }}
      aria-label={`Go to ${label} page`}
    >
      {label}
    </button>
  );
}
