import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiSnackbar-root':{
        top:theme.spacing(9),
    }
    }
}))

function Notification(props) {

  const classes = useStyles();
  const { notify, setNotify } = props;

  const handleClose = (event ,reason) => {
      if(reason === 'clickaway')
        return;
    setNotify({...notify,isOpen : false})
  }

  return (
    <Snackbar 
    className={classes.root} 
    open={notify.isOpen} 
    autoHideDuration={6000} 
    anchorOrigin={{vertical:'top',horizontal:'right'}}
    onClose={handleClose}
    >
      <Alert 
      severity={notify.type}
      onClose={handleClose}
      >
          {notify.message}
          </Alert>
    </Snackbar>
  );
}

export default Notification;
