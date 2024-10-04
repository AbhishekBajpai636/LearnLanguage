import React from 'react';
import logo from './img/footer_logo.png'

function Footer() {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "black", color: "white" }}>
        <footer className="bd-footer py-4 py-md-5 mt-5">
          <div className="container py-4 py-md-5 px-4 px-md-3" style={{ backgroundColor: "black" }}>
            <div className="row">
              <div className="col-lg-3 mb-3">
                <a className="d-inline-flex align-items-center mb-2 text-white text-decoration-none" href="/" aria-label="Bootstrap">
                  <span className="fs-5" style={{ fontWeight: 'bold', color: "white" }}>
                  <img src={logo} alt="LearnLanguage Logo" style={{ height: '50px', marginRight: '10px', backgroundColor:'black'}} />
                  LearnLanguage</span>
                </a>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    Designed and built with all the love in the world by <a href="www.linkedin.com/in/abhishek-bajpai-25ab16251" style={{ color: 'white' }}>Abhishek Bajpai</a>, a student of Computer Science.
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5 style={{ color: 'white' }}>Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="/" style={{ color: 'white' }}>Home</a></li>
                  <li className="mb-2"><a href="about" style={{ color: 'white' }}>About</a></li>
                  <li className="mb-2"><a href="contact" style={{ color: 'white' }}>Contact</a></li>
                </ul>
              </div>

              <div className="col-6 col-lg-2 mb-3">
                <h5 style={{ color: 'white' }}>Backend Languages</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="https://www.w3schools.com/python/default.asp" style={{ color: 'white' }}>Python</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/java/default.asp" style={{ color: 'white' }}>Java</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/nodejs/default.asp" style={{ color: 'white' }}>Node.js</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/php/default.asp" style={{ color: 'white' }}>PHP</a></li>
                </ul>
              </div>

              <div className="col-6 col-lg-2 mb-3">
                <h5 style={{ color: 'white' }}>Frontend Languages</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="https://www.w3schools.com/html" target="_blank" rel="noopener" style={{ color: 'white' }}>HTML</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener" style={{ color: 'white' }}>CSS</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener" style={{ color: 'white' }}>JavaScript</a></li>
                  <li className="mb-2"><a href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank" rel="noopener" style={{ color: 'white' }}>React</a></li>
                </ul>
              </div>

              <div className="col-6 col-lg-2 mb-3">
                <h5 style={{ color: 'white' }}>Databases</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="languages/databases/mysql" target="_blank" rel="noopener" style={{ color: 'white' }}>MySQL</a></li>
                  <li className="mb-2"><a href="languages/databases/postgresql" target="_blank" rel="noopener" style={{ color: 'white' }}>PostgreSQL</a></li>
                  <li className="mb-2"><a href="languages/databases/mongodb" target="_blank" rel="noopener" style={{ color: 'white' }}>MongoDB</a></li>
                  <li className="mb-2"><a href="languages/databases/sqlite" target="_blank" rel="noopener" style={{ color: 'white' }}>SQLite</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
