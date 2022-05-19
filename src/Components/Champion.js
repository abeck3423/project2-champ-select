import React from "react";
import ChampDetails from "./ChampDetails";
import { useEffect, useState } from "react";

function Champion(props) {
  let [champion, setChampion] = useState({});

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setChampion(data.data);
      });
  }, [champion]);

  return (
    <div>
      {champion.name ? (
        <ChampDetails champion={champion} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Champion;
