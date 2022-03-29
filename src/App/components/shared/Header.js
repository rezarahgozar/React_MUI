import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import { makeStyles, ThemeProvider } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff!important",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      //marginRight:'9px',
      marginRight: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Topics"
              startAdornment={<SearchIcon fontSize="small" />}
              className={classes.searchInput}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsPowerIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
