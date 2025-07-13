"use client"
import { colors } from '@mui/material';
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
        fontFamily: 'Inter, sans-serif',
        fontSize: '28px',
        fontWeight: '800',
        alignItems: 'center',
        border: 'none',
          width: '190px',
          height: '40px',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1.5em',
          padding: '12px 0',
          margin: '0 auto',
          boxSizing: 'border-box',
          backgroundColor: '#f2d1d4',
          color: '#829672',
      }}
      aria-label={`Go to ${label} page`}
    >
      {label}
    </button>
  );
}
