import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Link } from "react-router-dom";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import MyLinks from './MyLinks'

function Header() {
    return (
        <div className='w-screen h-36 grid grid-rows-2 md:grid-cols-2 text-[#00272F]'>
            
            <div className='w-full  md:h-24'>
                <p>Ryan Woodruff</p>
            </div>
                <Router>
                    <Navbar />
                    <Routes>
                    <Route path='/' exact element={<AboutMe />} />
                    <Route path='/Portfolio' exact element={<Portfolio />} />
                    <Route path='/Resume' exact element={<Resume />} />
                    <Route path='/Contact' element={<MyLinks />} />
                    </Routes>
                </Router>
        </div>
     );
}

export default Header;