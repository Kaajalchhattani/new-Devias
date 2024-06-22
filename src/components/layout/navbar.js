"use client";
import PopoverNav from "./popoverNav";
import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Popover,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SideNavBar from "./sideNavBar";
const Navbar = () => {
  const [open, setopen] = React.useState(false);
  const handleClick = () => {
    setopen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickpop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosepop = () => {
    setAnchorEl(null);
  };
  const openpop = Boolean(anchorEl);

  return (
    <Box component="header">
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          padding: 2,
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={5}>
          <IconButton onClick={() => handleClick()} sx={{ padding: 0 }}>
            <FormatListBulletedIcon />
            <Drawer open={open}>{<SideNavBar />}</Drawer>
          </IconButton>
          <SearchIcon />
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GroupIcon />
          <NotificationsIcon />
          <Avatar
            src="/assets/avatar.png"
            sx={{
              cursor: "pointer",
              padding: 0,
              height: 35,
              width: 35,
              marginTop: 0,
            }}
            onClick={handleClickpop}
          />
          <Popover
            open={openpop}
            anchorEl={anchorEl}
            onClose={handleClosepop}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <PopoverNav onClose={handleClosepop} />
          </Popover>
        </Stack>
      </Stack>
      <Divider sx={{ marginBottom: 5 }} />
    </Box>
  );
};

export default Navbar;
