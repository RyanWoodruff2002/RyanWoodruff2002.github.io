import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import AboutMe from './AboutMe';
import PokemonFetcher from './PokemonFetcher';
import PickyEater from './PickyEater';
import TicketRuler from './TicketRuler';
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
        <Route path='/MyLinks' element={<MyLinks />} />
      </Routes>
    </Router>
  );
}

export default App;
