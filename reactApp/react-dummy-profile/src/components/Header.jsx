import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";

const TypographyStyle = styled("Typography")({
  flex: 1,
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <TypographyStyle>Profile List</TypographyStyle>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
