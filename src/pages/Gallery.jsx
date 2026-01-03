// src/pages/Gallery.jsx
import React from 'react';

const galleryImages = [
  'https://source.unsplash.com/300x200/?paris',
  'https://source.unsplash.com/300x200/?tokyo',
  'https://source.unsplash.com/300x200/?sydney',
  'https://source.unsplash.com/300x200/?newyork',
  'https://source.unsplash.com/300x200/?london',
];

export default function Gallery() {
  return (
    <main>
      <h2>Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </main>
  );
}
