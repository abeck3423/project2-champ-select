import { useEffect, useState } from "react";
import Champion from "./Champion";
import { capitalize } from "../helpers/strings";
import {
  Grid,
  Box,
  ListItem,
  List,
  ListItemText,
  Container,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: "#343434",
    color: "white",
    "&:hover": {
      backgroundColor: "#5b5b5b",
    },
  },
}));

function AllChamps() {
  const [champList, setChampList] = useState([]);
  const [selectedChamp, setSelectedChamp] = useState("");
  const classes = useStyles();

  const selectChamp = (champion) => {
    setSelectedChamp(champion);
  };

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
    <Container sx={{ m: "2rem auto" }} maxWidth="md" className="ChampApp">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ overflowY: "scroll", maxHeight: "80vh" }}>
            <List>
              {Object.keys(champList).map((champ) => (
                <ListItem
                  className={classes.listItem}
                  key={champ}
                  onClick={() => selectChamp(champList[champ])}
                >
                  <ListItemText>{champList[champ].name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            {selectedChamp ? <Champion champion={selectedChamp} /> : null}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AllChamps;
