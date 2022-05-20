import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import Lane from "./Components/Lane";
import Navbar from "./Components/Navbar";

function App() {
  const [chosenChamps, setChosenChamps] = useState({
    top: [],
    mid: [],
    jungle: [],
    bot: [],
    sup: [],
  });

  const addChampionToLane = (champion, lane) => {
    let updateList = chosenChamps;
    setChosenChamps(updateList);
  };

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/top"
            element={
              <Lane
                title="top"
                champPicks={chosenChamps.top}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            path="/mid"
            element={
              <Lane
                title="mid"
                champPicks={chosenChamps.mid}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            path="/jungle"
            element={
              <Lane
                title="jungle"
                champPicks={chosenChamps.jungle}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            path="/bot"
            element={
              <Lane
                title="bot"
                champPicks={chosenChamps.bot}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            path="/sup"
            element={
              <Lane
                title="sup"
                champPicks={chosenChamps.sup}
                onChange={addChampionToLane}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
