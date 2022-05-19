import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const [dashboard, setDashboard] = React.useState(null);
  const open = Boolean(dashboard);
  const handleClick = (event) => {
    setDashboard(event.currentTarget);
  };
  const handleClose = () => {
    setDashboard(null);
  };

  return (
    <div className="dashboardMenu">
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
        dashboard={dashboard}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Top</MenuItem>
        <MenuItem onClick={handleClose}>Mid</MenuItem>
        <MenuItem onClick={handleClose}>Jungle</MenuItem>
        <MenuItem onClick={handleClose}>Bot</MenuItem>
        <MenuItem onClick={handleClose}>Sup</MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
