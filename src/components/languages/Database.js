import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import mg_img from './logos/mongodb.png';
import ms_img from './logos/mysql.png';
import ps_img from './logos/postgreSQL.png';
import sl_img from './logos/SQLite.png';
import { useState } from 'react';

function Database(props) {
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
      <Header title="LearnLanguage" mode={mode} toggleMode={toggleMode}/>
      <div className={`container-fluid bg-${mode === 'light' ? 'light' : 'dark'}`} style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#4CAF50', fontFamily:'icon'}}><u>Popular Databases</u></h2>
        </div>
        
        <div className="container px-4 my-4">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#e3f2fd' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={ms_img} className="card-img-top" alt="MySQL" height={300} width={300} />
                  <div className="card-body">
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`}/>
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>A widely used open-source relational database management system (RDBMS)...</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" className="btn btn-primary mx-3" style={{ backgroundColor: '#007bff' }}>MDN web docs</a>
                    <a href="https://www.w3schools.com/mysql/default.asp" className="btn btn-primary mx-3" style={{ backgroundColor: '#007bff' }}>w3school</a>
                    <a href="https://www.codecademy.com/resources/docs/mysql" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#007bff' }}>codecademy</a>
                    <a href="https://www.tutorialspoint.com/mysql/index.htm" className="btn btn-primary mx-3" style={{ backgroundColor: '#007bff' }}>Tutorialspoint</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#fff3e0' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={ps_img} className="card-img-top" alt="PostgreSQL" height={300} width={300} />
                  <div className="card-body">
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`} />
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>An advanced, open-source relational database system...</p>
                    <a href="https://www.postgresql.org/docs/current/index.html" className="btn btn-primary mx-3" style={{ backgroundColor: '#9c27b0' }}>PostgreSQL</a>
                    <a href="https://www.w3schools.com/postgresql/index.php" className="btn btn-primary mx-3" style={{ backgroundColor: '#9c27b0' }}>w3school</a>
                    <a href="https://www.codecademy.com/resources/docs/postgresql" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#9c27b0' }}>codecademy</a>
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
                  <img src={mg_img} className="card-img-top" alt="MongoDB" height={300} width={200} />
                  <div className="card-body">
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`} />
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>A popular NoSQL database that stores data in a flexible, JSON-like format...</p>
                    <a href="https://www.mongodb.com/docs/" className="btn btn-primary mx-3" style={{ backgroundColor: '#4CAF50' }}>MongoDB</a>
                    <a href="https://www.w3schools.com/mongodb/index.php" className="btn btn-primary mx-3" style={{ backgroundColor: '#4CAF50' }}>w3school</a>
                    <a href="https://www.codecademy.com/learn/learn-mongodb" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#4CAF50' }}>codecademy</a>
                    <a href="https://www.tutorialspoint.com/mongodb/index.htm" className="btn btn-primary mx-3" style={{ backgroundColor: '#4CAF50' }}>tutorialspoint</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="p-3 border" style={{ backgroundColor: '#e3f2fd' }}>
                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'}`}>
                  <img src={sl_img} className="card-img-top" alt="SQLite" height={320} width={200} />
                  <div className="card-body">
                    <hr className={ `text-${mode === 'light' ? 'dark' : 'light'}`} />
                    <p className={ `text-${mode === 'light' ? 'dark' : 'light'}`}>A lightweight, serverless, self-contained SQL database engine...</p>
                    <a href="https://www.sqlitetutorial.net/" className="btn btn-primary mx-3" style={{ backgroundColor: '#007bff' }}>SQLite</a>
                    <a href="https://www.tutorialspoint.com/sqlite/index.htm" className="btn btn-primary mx-3" style={{ backgroundColor: '#007bff' }}>tutorialspoint</a>
                    <a href="https://www.codecademy.com/article/what-is-sqlite" className="btn btn-primary mx-3 my-3" style={{ backgroundColor: '#007bff' }}>codecademy</a>
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

export default Database;
