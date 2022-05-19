import React from "react";

function ChampDetails(props) {
  let champImage = `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${props.champion.id}.png`;
  return (
    <>
      <h1>{props.champion.name}</h1>
      <img src={champImage} />
    </>
  );
}

export default ChampDetails;
