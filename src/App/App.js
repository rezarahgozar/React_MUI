import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import SideMenu from "./components/shared/SideMenu";

import Employees from "./pages/employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
    paddingLeft: "320px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
