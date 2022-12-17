import './App.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import PokemonFetcher from './PokemonFetcher';
import PickyEater from './PickyEater';
import TicketRuler from './TicketRuler';
import Aircnc from './Aircnc';
import GameBuddy from './GameBuddy';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PokemonFetcher' exact element={<PokemonFetcher />} />
        <Route path='/PickyEater' exact element={<PickyEater />} />
        <Route path='/TicketRuler' exact element={<TicketRuler />} />
        <Route path='/Aircnc' exact element={<Aircnc />} />
        <Route path='/GameBuddy' exact element={<GameBuddy />} />
        <Route path='/Resume' exact element={<Resume />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
