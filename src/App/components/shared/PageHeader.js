import { Card, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { flexbox } from "@mui/system";

const theme = createTheme();


const useStyles = makeStyles((theme) =>({
    root:{
       backgroundColor:'grey!important' 
    },
    PageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(3)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

const PageHeader = (props) => {

  const { title, subTitle, icon } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>
          {icon}
        </Card>
      <div className={classes.pageTitle}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {subTitle}
        </Typography>
      </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
