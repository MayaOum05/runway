import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Feed</Link>
      <Link href="/search">Search</Link>
      <Link href="/saved">Saved</Link>
    </nav>
  );
}
