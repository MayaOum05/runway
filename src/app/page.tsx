import React from 'react';

// components
import Auth from './components/Auth'; 
import Posts from './components/Posts';

export default function Home() {
  return (
    <main>
      <div className="phone-frame">
        <div className="phone-screen">
          <Auth />
        </div>
      </div>
    </main>
  );
}
