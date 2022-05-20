import React from "react";
import AllChamps from "./AllChamps";

function Home() {
  return (
    <div>
      <h1>Choose your Champion!</h1>
      <div className="homePage">
        <AllChamps />
      </div>
    </div>
  );
}

export default Home;
