import { useEffect, useState } from "react";
import ChampDetails from "./ChampDetails";

function AllChamps() {
  const [champList, setChampList] = useState([]);

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/champion.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setChampList(data.data);
      });
  }, []);

  return (
    <>
      {Object.keys(champList).map((champ) => (
        <>
          <ChampDetails data={champList[champ]} />
        </>
      ))}
    </>
  );
}

export default AllChamps;
