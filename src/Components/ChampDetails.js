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
  };

  return (
    <>
      <h1>{props.champion.name}</h1>
      <img src={champImage} />
      <h4>{props.champion.blurb}</h4>
      <h4>
        {props.champion.tags[0]}, {props.champion.tags[1]}
      </h4>
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
            <MenuItem value="Top">Top</MenuItem>
            <MenuItem value="Mid">Mid</MenuItem>
            <MenuItem value="Jungle">Jungle</MenuItem>
            <MenuItem value="Bot">Bot</MenuItem>
            <MenuItem value="Sup">Sup</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default ChampDetails;
