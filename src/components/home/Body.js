import React, { useEffect } from 'react';
import Header from './Header';
import banner from './img/LearnLanguage.jpg';
import mdn from './img/mdn.png';
import w3 from './img/w3.png';
import tuto from './img/tuto.png';
import cd from './img/codecademy.png';
import './style.css'; // Import the CSS file
import ft from './img/ft.png';
import bk from './img/bk.png';
import db from './img/db.png';
import { useState } from 'react';
import Footer from './Footer';

function Body(props) {
    // Scroll animation for sections
    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('slide-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const lightTheme = {
        backgroundColor: '#ffffff',
        color: '#000000',
        cardBackground: '#f8f9fa',
        cardTextColor: '#333',
    };

    const darkTheme = {
        backgroundColor: '#333333',
        color: '#f4f4f4',
        cardBackground: '#444',
        cardTextColor: '#f4f4f4',
    };

    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, minHeight: '100vh' }}>
            {/* Toggle Button */}
            <Header title="LearnLanguage" mode={mode} toggleMode={toggleMode}/>

            {/* Carousel Section */}
            <div className="container-fluid">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="LearnLanguage Banner" style={{ border: "1px solid black", height: '700px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className={`section slide-left py-5 my-5`}>
                <div className="container-fluid text-center">
                    <div className={`col-md-6 mx-auto`} style={{ backgroundColor: theme.cardBackground, color: theme.color }}>
                        <h2 className="display-5 fw-bold">Designed for New Learners</h2>
                        <p className="fw-normal mb-3">Learn from the best site suited to your needs.</p>
                        <p className="fw-normal mb-3">We provide a selection of sites for different languages, helping learners select the best one according to their style.</p>
                    </div>
                </div>
            </section>

            {/* Card Section - Learning Platforms */}
            <section className="section slide-right">
                <div className="container-fluid my-5">
                    <h2 className="text-center mb-4">Learn from different sites according to your Learning style</h2>
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                    <div className="row">
                        {/* Card 1 - W3Schools */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm" style={{ backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={w3} className="img-fluid rounded-start" alt="W3Schools Logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">W3Schools</h5>
                                            <p className="card-text">W3Schools is one of the most popular and widely used web development tutorials websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - TutorialsPoint */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm" style={{ backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={tuto} className="img-fluid rounded-start" alt="TutorialsPoint Logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">TutorialsPoint</h5>
                                            <p className="card-text">A leading platform offering tutorials on technical and non-technical subjects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Card 3 - MDN Web Docs */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm" style={{ backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mdn} className="img-fluid rounded-start" alt="MDN Web Docs Logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">MDN Web Docs</h5>
                                            <p className="card-text">A comprehensive learning resource for web development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Codecademy */}
                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm" style={{ backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={cd} className="img-fluid rounded-start" alt="Codecademy Logo" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Codecademy</h5>
                                            <p className="card-text">Join millions of learners to develop technical skills for your career growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Language Section */}
            <section className="section slide-right">
                <h2 className="text-center mb-4">Languages provided here</h2>
                <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ width: "18rem", backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <img src={ft} className="card-img-top" alt="Frontend Languages" />
                                <div className="card-body">
                                    <h5 className="card-title">Frontend Languages</h5>
                                    <p className="card-text">These languages are used to design the front page of a web page.</p>
                                    <a href="frontend" className="btn btn-primary">Frontend Language</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" style={{ width: "18rem", backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <img src={bk} className="card-img-top" alt="Backend Languages" />
                                <div className="card-body">
                                    <h5 className="card-title">Backend Languages</h5>
                                    <p className="card-text">These languages perform server-side operations.</p>
                                    <a href="backend" className="btn btn-primary">Backend Language</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card" style={{ width: "18rem", backgroundColor: theme.cardBackground, color: theme.cardTextColor }}>
                                <img src={db} className="card-img-top" alt="Databases" />
                                <div className="card-body">
                                    <h5 className="card-title">Databases</h5>
                                    <p className="card-text">Used for storing, retrieving, and manipulating data.</p>
                                    <a href="database" className="btn btn-primary">Databases</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            
        </div>
    );
}

export default Body;
