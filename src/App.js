import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from "./Portfolio";
import PokemonFetcher from './PokemonFetcher';
import PickyEater from './PickyEater';
import TicketRuler from './TicketRuler';
import Aircnc from "./Aircnc";
import GameBuddy from "./GameBuddy";
import MyLinks from './MyLinks';
import Resume from "./Resume";
import './App.css';
import Header from "./Header";

function App() {
  return (

    <Header />

    // <div>

    //   <div className="bg-white sticky top-0" >
    //     <p className="float-left">RYAN WOODRUFF<br/>FULL STACK DEVELOPER</p>
    //     {/* <p>FULL STACK DEVELOPER</p> */}
    //   {/* </div>

    //   <div> */}
    //     <div>
    //       <Router className="float-right">
    //         <Navbar />
    //         <Routes>
    //           <Route path='/' exact element={<AboutMe />} />
    //           <Route path='/Portfolio' exact element={<Portfolio />} />
    //           {/* <Route path='/PokemonFetcher' element={<PokemonFetcher />} />
    //           <Route path='/PickyEater' element={<PickyEater />} />
    //           <Route path='/TicketRuler' element={<TicketRuler />} />
    //           <Route path='/Aircnc' element={<Aircnc />} />
    //           <Route path='/GameBuddy' element={<GameBuddy />} /> */}
    //           <Route path='/Resume' exact element={<Resume />} />
    //           <Route path='/Contact' element={<MyLinks />} />
    //         </Routes>
    //       </Router>
    //     </div>
    //   </div>

    // </div>

  );
}

export default App;
