import React from 'react'
import About from './About.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Contact from './Contact.js'
import Frontend from '../languages/Frontend.js';
import Backend from '../languages/Backend.js';
import Database from '../languages/Database.js';
import Body from './Body.js';

function Home() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/" element={<Body/>}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/frontend" element={<Frontend/>}></Route>
                    <Route path="/backend" element={<Backend />}></Route>
                    <Route path="/database" element={<Database/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Home
