import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import Lane from "./Components/Lane";
import Navbar from "./Components/Navbar";
import ChampDetails from "./Components/ChampDetails";

function App() {
  const [chosenChamps, setChosenChamps] = useState({
    top: [],
    mid: [],
    jungle: [],
    bot: [],
    sup: [],
  });

  const addChampionToLane = (champ, name) => {
    // console.log(name);
    let myNewChamp = chosenChamps;
    myNewChamp[name].push(champ);
    setChosenChamps(myNewChamp);
  };

  return (
    <div className="App">
      <nav className="navbarMenu">
        <Navbar />
      </nav>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home onChange={addChampionToLane} />} />
          <Route
            className="myTopLane"
            path="/Top"
            element={<Lane title="Top" champPicks={chosenChamps.top} />}
          />
          <Route
            className="myMidLane"
            path="/Mid"
            element={<Lane title="Mid" champPicks={chosenChamps.mid} />}
          />
          <Route
            className="myJungleLane"
            path="/Jungle"
            element={<Lane title="Jungle" champPicks={chosenChamps.jungle} />}
          />
          <Route
            className="myBotLane"
            path="/Bot"
            element={<Lane title="Bot" champPicks={chosenChamps.bot} />}
          />
          <Route
            className="mySupLane"
            path="/Sup"
            element={<Lane title="Sup" champPicks={chosenChamps.sup} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
