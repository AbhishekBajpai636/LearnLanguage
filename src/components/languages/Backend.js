import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import python_img from './logos/python.png';
import java_img from './logos/java.png';
import nodejs_img from './logos/nodejs.png';
import php_img from './logos/php.png';
import { useState } from 'react';

function Backend() {
  const [mode,setMode] = useState('light')
    const toggleMode = ()=>{
            if (mode === 'light'){
                setMode('dark');
                document.body.style.backgroundColor='white';
                
            }
            if (mode === 'dark'){
                setMode('light');
                document.body.style.backgroundColor='grey';
            }   
        }
  return (
    <div>
      <Header title="LearnLanguage" mode={mode} toggleMode={toggleMode} />
      <div className={`container-fluid bg-${mode === 'light' ? 'light' : 'dark'}`} style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#2e8b57', fontFamily:'icon'}}><u>Popular Backend Languages</u></h2>
        </div>
        
        <div className="container px-4 my-4">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#e0f7fa' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={python_img} className="card-img-top" alt="Python" height={300} width={300} />
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: '#4b8bbe' }}>Python</h3>
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>Known for its simplicity and readability, Python is widely used for backend development, particularly with frameworks like Django and Flask...</p>
                    <a href="https://www.codecademy.com/resources/docs/python" className="btn btn-primary mx-3" style={{ backgroundColor: '#4b8bbe' }}>codecademy</a>
                    <a href="https://www.w3schools.com/python/default.asp" className="btn btn-primary mx-3" style={{ backgroundColor: '#4b8bbe' }}>w3school</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Python" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#4b8bbe' }}>MDN web doc</a>
                    <a href="https://www.tutorialspoint.com/python/index.htm" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#4b8bbe' }}>tutorialspoint</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#ffe0b2' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={java_img} className="card-img-top" alt="Java" height={400} width={400} />
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: '#f89820' }}>Java</h3>
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`} />
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>Java has been a go-to language for enterprise-level backend development...</p>
                    <a href="https://www.codecademy.com/resources/docs/java" className="btn btn-primary mx-3" style={{ backgroundColor: '#f89820' }}>codecademy</a>
                    <a href="https://www.w3schools.com/java/default.asp" className="btn btn-primary mx-3" style={{ backgroundColor: '#f89820' }}>w3school</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Java" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#f89820' }}>MDN web doc</a>
                    <a href="https://www.tutorialspoint.com/java/index.htm" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#f89820' }}>tutorialspoint</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden my-4">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#f0f4c3' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={nodejs_img} className="card-img-top" alt="Node.js" height={300} width={200} />
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: '#68a063' }}>JavaScript (Node.js)</h3>
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>With Node.js, JavaScript can be used for backend development...</p>
                    <a href="https://www.codecademy.com/resources/docs/javascript/npm" className="btn btn-primary mx-3" style={{ backgroundColor: '#68a063' }}>codecademy</a>
                    <a href="https://www.w3schools.com/nodejs/default.asp" className="btn btn-primary mx-3" style={{ backgroundColor: '#68a063' }}>w3school</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#68a063' }}>MDN web doc</a>
                    <a href="https://www.tutorialspoint.com/nodejs/index.htm" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#68a063' }}>tutorialspoint</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#f9fbe7' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={php_img} className="card-img-top" alt="PHP" height={320} width={200} />
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: '#4f5b93' }}>PHP</h3>
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>PHP is one of the oldest and most widely used backend languages...</p>
                    <a href="https://www.codecademy.com/resources/docs/php" className="btn btn-primary mx-3" style={{ backgroundColor: '#4f5b93' }}>codecademy</a>
                    <a href="https://www.w3schools.com/php/default.asp" className="btn btn-primary mx-3" style={{ backgroundColor: '#4f5b93' }}>w3school</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/PHP" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#4f5b93' }}>MDN web doc</a>
                    <a href="https://www.tutorialspoint.com/php/index.htm" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#4f5b93' }}>tutorialspoint</a>
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

export default Backend;
