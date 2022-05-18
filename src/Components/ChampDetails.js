import React from "react";

function ChampDetails(props) {
  let champImage = `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${props.data.id}.png`;
  return (
    <>
      <h1>{props.data.name}</h1>
      <img src={champImage} />
    </>
  );
}

export default ChampDetails;
