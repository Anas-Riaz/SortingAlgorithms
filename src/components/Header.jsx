import reactImg from '../assets/logo.png';
import React from 'react';
export default function Header() {
  return (
    <header>
      <img src= {reactImg} alt= "Stylized atom" />
      <h1>Sorting Algorithms</h1>
      <p>
        Exploring Sorting Algorithms: Efficient Ways to Organize Data.
      </p>
    </header>
  );
}