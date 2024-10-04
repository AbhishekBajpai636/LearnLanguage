import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import html_img from './logos/html.png';
import css_img from './logos/css.png';
import js_img from './logos/js.png';
import react_img from './logos/react.png';

function Frontend() {
    return (
        <div>
            <Header title="LearnLanguage" />
            <div class="container-fluid" style={{ backgroundColor: '#f0f8ff' }}>
                <div className='container'>
                    <h2 style={{ textAlign: 'center', color: '#4CAF50', fontFamily:'icon' }}><u>Popular Frontend Languages</u></h2>
                </div>
                
                <div class="container px-4 my-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border" style={{ backgroundColor: '#e6f7ff' }}>
                                <div class="card">
                                    <img src={html_img} class="card-img-top" alt="HTML Logo" height={300} width={300} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: '#ff4500' }}>HTML</h3>
                                        <hr />
                                        <p class="card-text">HTML is the standard markup language for creating web pages...</p>
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" class="btn btn-primary mx-3" style={{ backgroundColor: '#f89820' }}>MDN web docs</a>
                                        <a href="https://www.w3schools.com/html/" class="btn btn-primary mx-3" style={{ backgroundColor: '#f89820' }}>w3school</a>
                                        <a href="https://www.codecademy.com/resources/docs/html" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#f89820' }}>codecademy</a>
                                        <a href="https://www.tutorialspoint.com/html/index.htm" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#f89820' }}>tutorialspoint</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border" style={{ backgroundColor: '#e6f7ff' }}>
                                <div class="card">
                                    <img src={css_img} class="card-img-top" alt="CSS Logo" height={300} width={300} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: '#1e90ff' }}>CSS</h3>
                                        <hr />
                                        <p class="card-text">CSS is used for describing the look and layout of a document...</p>
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="btn btn-primary mx-3" style={{ backgroundColor: '#1e90ff' }}>MDN web docs</a>
                                        <a href="https://www.w3schools.com/css/default.asp" class="btn btn-primary mx-3" style={{ backgroundColor: '#1e90ff' }}>w3school</a>
                                        <a href="https://www.codecademy.com/resources/docs/css" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#1e90ff' }}>codecademy</a>
                                        <a href="https://www.tutorialspoint.com/css/index.htm" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#1e90ff' }}>tutorialspoint</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container overflow-hidden my-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border" style={{ backgroundColor: '#e6f7ff' }}>
                                <div class="card">
                                    <img src={js_img} class="card-img-top" alt="JavaScript Logo" height={300} width={200} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: '#ffdf00' }}>JavaScript</h3>
                                        <hr />
                                        <p class="card-text">JavaScript adds interactivity and dynamic behavior to web pages...</p>
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="btn btn-primary mx-3" style={{ backgroundColor: '#ffa500' }}>MDN web docs</a>
                                        <a href="https://www.w3schools.com/js/default.asp" class="btn btn-primary mx-3" style={{ backgroundColor: '#ffa500' }}>w3school</a>
                                        <a href="https://www.codecademy.com/resources/docs/javascript" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#ffa500' }}>codecademy</a>
                                        <a href="https://www.tutorialspoint.com/javascript/index.htm" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#ffa500' }}>tutorialspoint</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3 border" style={{ backgroundColor: '#e6f7ff' }}>
                                <div class="card">
                                    <img src={react_img} class="card-img-top" alt="React Logo" height={320} width={200} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: '#61dafb' }}>React</h3>
                                        <hr />
                                        <p class="card-text">React is a JavaScript library for building user interfaces...</p>
                                        <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" class="btn btn-primary mx-3" style={{ backgroundColor: '#61dafb' }}>MDN web docs</a>
                                        <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" class="btn btn-primary mx-3" style={{ backgroundColor: '#61dafb' }}>w3school</a>
                                        <a href="https://www.codecademy.com/resources/docs/react" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#61dafb' }}>codecademy</a>
                                        <a href="https://www.tutorialspoint.com/react_native/index.htm" class="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#61dafb' }}>tutorialspoint</a>
                                    </div>
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

export default Frontend;
