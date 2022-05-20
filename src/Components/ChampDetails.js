import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ChampDetails(props) {
  let champImage = `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${props.champion.id}.png`;

  const [selectLane, setSelectLane] = useState("");

  const handleChange = (event) => {
    setSelectLane(event.target.value);
    // console.log(event.target.value);
    props.onChange(props.champion, event.target.value);
  };

  return (
    <div>
      <div>
        <h1 className="singleChampName">{props.champion.name}</h1>
        <img src={champImage} />
        <h4>{props.champion.blurb}</h4>
        <h4>
          {props.champion.tags[0]}, {props.champion.tags[1]}
        </h4>
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Lane</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectLane}
            label="lane"
            onChange={handleChange}
          >
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="mid">Mid</MenuItem>
            <MenuItem value="jungle">Jungle</MenuItem>
            <MenuItem value="bot">Bot</MenuItem>
            <MenuItem value="sup">Sup</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default ChampDetails;
