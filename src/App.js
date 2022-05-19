import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import Lane from "./Components/Lane";
import Navbar from "./Components/Navbar";

function App() {
  const [chosenChamps, setChosenChamps] = useState({
    topLane: [],
    midLane: [],
    jungleLane: [],
    botLane: [],
    supLane: [],
  });

  return (
    <div className="App">
      <nav>
        <Navbar />
        <Link to="/">Home</Link>
        <Link to="/top">Top</Link>
        <Link to="/mid">Mid</Link>
        <Link to="/jungle">Jungle</Link>
        <Link to="/bot">Bot</Link>
        <Link to="/sup">Sup</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/top"
            element={<Lane title="top" champPicks={chosenChamps.topLane} />}
          />
          <Route
            path="/mid"
            element={<Lane title="mid" champPicks={chosenChamps.midLane} />}
          />
          <Route
            path="/jungle"
            element={
              <Lane title="jungle" champPicks={chosenChamps.jungleLane} />
            }
          />
          <Route
            path="/bot"
            element={<Lane title="bot" champPicks={chosenChamps.botLane} />}
          />
          <Route
            path="/sup"
            element={<Lane title="sup" champPicks={chosenChamps.supLane} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
