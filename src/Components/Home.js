import React from "react";
import AllChamps from "./AllChamps";

function Home(props) {
  return (
    <div>
      <h1 className="homeIntro">Choose your Champion!</h1>
      <div className="homePage">
        <AllChamps onChange={props.onChange} />
      </div>
    </div>
  );
}

export default Home;
