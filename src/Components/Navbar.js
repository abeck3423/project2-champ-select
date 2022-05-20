import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import App from "../App";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/top">Top</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/mid">Mid</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/jungle">Jungle</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/bot">Bot</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/sup">Sup</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
