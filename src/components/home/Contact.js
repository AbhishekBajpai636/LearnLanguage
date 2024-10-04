import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
// import '../App.css'; // Optional: add any custom styles here

const App = () => {
  const [mode, setMode] = useState('light'); // Default theme is 'light'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <div className={`app bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`} style={{ minHeight: '100vh' }}>
      {/* Theme Toggle Button */}
      
      <Header title='LearnLanguage' mode={mode} toggleMode={toggleMode}/>

      {/* Contact Us Form */}
      <div className={`container my-5 bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'light' : 'dark'}`}>
        <h2 className={`display-5 bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}>Contact Us</h2>
        <hr className={`text-${mode === 'light' ? 'dark' : 'light'}`}/>
        <ContactUs mode={mode} />
      </div>
    </div>

    <Footer/>
    </>
  );
};

const ContactUs = ({ mode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    if (result.success) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
};


  return (
    <form onSubmit={handleSubmit} className={`form-group bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}>
      <label htmlFor="name" className="form-label">Name</label>
      <input
        type="text"
        id="name"
        className={`form-control bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        id="email"
        className={`form-control bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message" className="form-label">Message</label>
      <textarea
        id="message"
        className={`form-control bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
        required
      ></textarea>

      <button type="submit" className={`btn btn-${mode === 'light' ? 'dark' : 'light'} mt-3`}>
        Submit
      </button>
    </form>
  );
};

export default App;
