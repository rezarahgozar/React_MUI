import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import React, { useState } from "react";
import useTable from "../../components/shared/controls/useTable";
import * as employeeService from "../../services/employeeService";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PageHeader from "../../components/shared/PageHeader";
import HubIcon from "@mui/icons-material/Hub";
import { makeStyles } from "@mui/styles";
import { Controls } from "../../components/shared/controls/Controls";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EmployeeForm from "./EmployeeForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton:{
      position:'absolute',
      rignt:'10px'
  }
}));

const headCells = [
  { id: "fullName", label: "Name" },
  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
];

const EmployeeList = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <Toolbar>
        <Controls.MyInput
          label="Search Employees"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
        <Controls.MyButton
        className={classes.newButton}
          startIcon={<AddIcon />}
          text="Add New"
          onClick={() => setOpenPopup(true)}
        ></Controls.MyButton>
      </Toolbar>
      <TblContainer>
        <TblHead />

        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />

      <Controls.MyPopup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm />
      </Controls.MyPopup>
    </>
  );
};

export default EmployeeList;
