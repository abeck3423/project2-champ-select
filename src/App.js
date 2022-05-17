import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Top from "./Components/Top";
import Mid from "./Components/Mid";
import Jungle from "./Components/Jungle";
import Bot from "./Components/Bot";
import Sup from "./Components/Sup";

function App() {
  return (
    <div className="App">
      <nav>
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
          <Route path="/top" element={<Top />} />
          <Route path="/mid" element={<Mid />} />
          <Route path="/jungle" element={<Jungle />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/sup" element={<Sup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
