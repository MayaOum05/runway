import React from 'react';
import OutfitCard from '../components/OutfitCard';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <OutfitCard
        username="usernamekatie"
        style="Casual-Chic"
        imageUrl="/images/outfit1.jpg"
        items={[
          "Quince | 100% Leather Oversized Bomber Jacket",
          "Shein | Pleated Ruffle Mini Skirt",
          "GAP | CashSoft Cardigan"
        ]}
        comments={[
          { username: "username1", text: "STOP THIS IS SOSO CUTE!!" },
          { username: "ueuetheowo", text: "i need the jacket so bad bro you dont understand" }
        ]}
      />
      <Navbar />
    </div>
  );
}
