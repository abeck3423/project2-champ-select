import React from "react";
import ChampDetails from "./ChampDetails";

function Champion(props) {
  return (
    <div>
      {props.champion ? (
        <ChampDetails champion={props.champion} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Champion;
