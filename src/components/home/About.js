import React from 'react';
import Header from './Header';
import about_img from './img/about_img.png';
import Footer from './Footer';
import { useState } from 'react';

function About(props) {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  // Style definitions for light and dark modes
  const lightTheme = {
    backgroundColor: '#f4f4f4',
    color: '#333',
    boxBackgroundColor: '#e9ecef',
    headingColor: '#007bff',
    cardBackgroundColor: '#fff',
    cardTextColor: '#555',
  };

  const darkTheme = {
    backgroundColor: '#333',
    color: '#f4f4f4',
    boxBackgroundColor: '#444',
    headingColor: '#66b2ff',
    cardBackgroundColor: '#555',
    cardTextColor: '#ddd',
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, minHeight: '100vh' }}>
      <Header title="LearnLanguage" mode={mode} toggleMode={toggleMode} />

      {/* Main Container */}
      <div className={`bg-${mode === 'light' ? 'light' : 'dark'}`} style={{ marginTop: '2rem', marginBottom: '2rem', padding: '0 15px' }}>
        {/* Inner Box with Padding and Rounded Corners */}
        <div style={{ backgroundColor: theme.boxBackgroundColor, padding: '2rem', borderRadius: '8px' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ color: theme.color }}>We welcome you to the best platform providing website:</h2>
          </div>

          {/* Content Section */}
          <div style={{ maxWidth: '50%', margin: '0 auto', padding: '2rem 0' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: theme.headingColor }}>LearnLanguage</h2>
            <hr />
            <p style={{ fontSize: '1.25rem', margin: '1rem 0', color: theme.color }}>
              This is the platform that holds the links of several educational sites. It aims to help students or learners to find the best learning site according to their needs. Everyone has a different perspective, so from this site, they can choose the best site according to their preferences instead of searching through a browser first.
            </p>
            <p style={{ fontSize: '1.25rem', margin: '1rem 0', color: theme.color }}>
              It provides several platforms for users to choose the best platform for their understanding.
            </p>

            {/* Card Section with Image */}
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div style={{ 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '8px', 
                backgroundColor: theme.cardBackgroundColor 
              }}>
                <img
                  src={about_img}
                  alt="About"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px 8px 0 0',
                  }}
                />
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: theme.cardTextColor }}>Explore more about our platform and discover the best educational resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
