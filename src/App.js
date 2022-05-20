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
      <nav className="navbarMenu">
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            className="myTopLane"
            path="/Top"
            element={
              <Lane
                title="Top"
                champPicks={chosenChamps.top}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            className="myMidLane"
            path="/Mid"
            element={
              <Lane
                title="Mid"
                champPicks={chosenChamps.mid}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            className="myJungleLane"
            path="/Jungle"
            element={
              <Lane
                title="Jungle"
                champPicks={chosenChamps.jungle}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            className="myBotLane"
            path="/Bot"
            element={
              <Lane
                title="Bot"
                champPicks={chosenChamps.bot}
                onChange={addChampionToLane}
              />
            }
          />
          <Route
            className="mySupLane"
            path="/Sup"
            element={
              <Lane
                title="Sup"
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
