import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
      <ul className="flex border-b items-center justify-around">
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/">About Me</Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/PokemonFetcher">
            Pokemon Fetcher
          </Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/PickyEater">
            Picky Eater
          </Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/TicketRuler">
            Ticket Ruler
          </Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/Aircnc">
            Aircnc
          </Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/GameBuddy">
            Game Buddy
          </Link>
        </li>
        <li className="mr-1">
          <Link className="inline-block py-2 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="#" to="/MyLinks">
            Connect With Me
          </Link>
        </li>
      </ul>
  );
}
export default Navbar;