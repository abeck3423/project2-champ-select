import React from "react";
import ChampDetails from "./ChampDetails";

function Champion(props) {
  return (
    <div>
      {props.champion ? (
        <ChampDetails champion={props.champion} onChange={props.onChange} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Champion;
