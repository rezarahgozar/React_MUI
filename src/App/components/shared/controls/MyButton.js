import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
      root: {
        "&.MuiButton-root": {
          margin:theme.spacing(1)
        },
        "&.MuiButton-text": {
          color: "grey",
          textTransform: 'lowercase'
        },
        "&.MuiButton-contained": {
          color: "yellow"
        },
        "&.MuiButton-outlined": {
          color: "brown"
        }
      }
    };
  });

export default function MyButton(props) {
  const { text, size, color, variant, onclick, ...other } = props;
  const myClasses = useStyles();

  return (
    <Button
      variant={variant || "standard"}
      size={size || "large"}
      coloe={color || "primary"}
      onClick={onclick}
      {...other}
      classes={{
          root:myClasses.root
        }}
    >
      {text}
    </Button>
  );
}
