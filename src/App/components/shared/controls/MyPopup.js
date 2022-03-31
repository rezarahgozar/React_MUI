import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import {Controls} from './Controls';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      "& .MuiDialog-root": {
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(5),
      },
    },
  };
});

export default function MyPopup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.paper }}>
      <DialogTitle>
        <div style={{display:'flex'}}>
          <Typography variant="h6" component="div" style={{flexGrow:1}}>
            {title}
          </Typography>
          <Controls.ActionButton
          color="secondary"
          onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
            
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
