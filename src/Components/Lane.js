import React from "react";

function Lane(props) {
  return (
    <div>
      <h1>This is the {props.title} Lane Page!</h1>
      {props.champPicks.map((champ) => (
        <h2>{champ.name}</h2>
      ))}
    </div>
  );
}

export default Lane;
