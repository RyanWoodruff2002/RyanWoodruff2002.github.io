import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <p>
      <Link to="/">About Me</Link>
    </p>
    <p>
      <Link to="/PokemonFetcher">Pokemon Fetcher</Link>
    </p>
    <p>
      <Link to="/PickyEater">Picky Eater</Link>
    </p>
    <p>
      <Link to="/TicketRuler">Ticket Ruler</Link>
    </p>
    <p>
      <Link to="/MyLinks">My Links</Link>
    </p>
  </div>
  );
}
export default navbar;