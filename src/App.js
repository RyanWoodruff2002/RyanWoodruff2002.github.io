import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import PokemonFetcher from './PokemonFetcher';
import PickyEater from './PickyEater';
import TicketRuler from './TicketRuler';
import Aircnc from "./Aircnc";
import GameBuddy from "./GameBuddy";
import MyLinks from './MyLinks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<AboutMe />} />
        <Route path='/PokemonFetcher' element={<PokemonFetcher />} />
        <Route path='/PickyEater' element={<PickyEater />} />
        <Route path='/TicketRuler' element={<TicketRuler />} />
        <Route path='/Aircnc' element={<Aircnc />} />
        <Route path='/GameBuddy' element={<GameBuddy />} />
        <Route path='/MyLinks' element={<MyLinks />} />
      </Routes>
    </Router>
  );
}

export default App;
