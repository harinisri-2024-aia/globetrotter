// src/pages/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '1rem auto' }}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
