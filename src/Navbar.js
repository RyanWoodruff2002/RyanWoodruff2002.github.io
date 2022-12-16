import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
      <div className='w-full h-24 centered md:h-24'>
        {/* <p>Ryan Woodruff <br/> Full Stack Developer</p> */}
        <div >
          <Link href="#" to="/">
            Home</Link>
        </div>
        <div >
          <Link href="#" to="/Portfolio">
            Portfolio
          </Link>
        </div>
        <div >
          <Link href="#" to="/Resume">
            Resume
          </Link>
        </div>
        <div >
          <Link href="#" to="/Contact">
            Contact
          </Link>
        </div>
      </div>
  );
}
export default Navbar;