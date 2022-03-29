import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/shared/PageHeader";
import HubIcon from "@mui/icons-material/Hub";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form for New Employee"
        icon={<HubIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
