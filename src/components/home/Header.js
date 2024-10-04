import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'

function Header(props) {
    return (
        <div>
            <nav className = {`navbar navbar-expand-lg navbar-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'dark':'light'}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand bg-${props.mode==='light'?'dark':'light'}`} to="/">
                        <img src={logo} alt="LearnLanguage Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <b>{props.title}</b>
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className={`nav-link bg-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={`nav-link bg-${props.mode==='light'?'dark':'light'}`} to="/about" >About Us</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className={`nav-link bg-${props.mode==='light'?'dark':'light'}`} to="/contact" >Contact Us</Link>
                            </li>
                            <li className="nav-item  dropdown">
                                <Link className={`nav-link dropdown-toggle bg-${props.mode==='light'?'dark':'light'}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Languages
                                </Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#495057' }}>
                                    <li><Link className="dropdown-item " to="/frontend" style={{ color: 'black' }}>Frontend Languages</Link></li>
                                    <li><Link className="dropdown-item " to="/backend" style={{ color: 'black' }}>Backend Languages</Link></li>
                                    <li><hr className="dropdown-divider" style={{ borderColor: '#6c757d' }} /></li>
                                    <li><Link className="dropdown-item " to="/database" style={{ color: 'black' }}>Databases</Link></li>
                                </ul>
                            </li>
                            <div className={`form-check form-switch my-2`}>
                                <input className={`form-check-input bg-${props.mode==='light'?'light':'dark'}`} type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                                
                            </div>
                            <label className={` mx-2 my-2 text-${props.mode==='light'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Theme</label>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
