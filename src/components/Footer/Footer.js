import React from 'react';
import './Footer.css';

export default function Footer() {
  // Get the current date
  const currentDate = new Date();

  // Format the date as desired (e.g., "May 7, 2023")
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className='footer-container'>
      <h1>Today&nbsp;{formattedDate}</h1>
    </div>
  );
}
