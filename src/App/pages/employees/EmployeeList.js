import { InputAdornment, Paper, TableBody, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Notification from '../../components/shared/Notification';
import MyConfirmDialog from '../../components/shared/controls/MyConfirmDialog';

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
  {id:'actions',label:'Actions', disableSorting: true}
];

const EmployeeList = () => {

  const classes = useStyles();

  const [confirmDialog, setConfirmDialog] = useState({isOpen:false,title:'',subTitle:''});
  const [openPopup, setOpenPopup] = useState(false);
  const [notify,setNotify] = useState({isOpen:false,message:'',type:''});
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [recordForEdit,setRecordForEdit]= useState(null);
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

  const addOrEdit = (employee,resetForm) => {

    if(employee.id == 0)
        employeeService.insertEmployee(employee)
    else
        employeeService.updateEmployee(employee)
    
    
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
    setNotify({
        isOpen:true,
        message:'This is a success message!',
        type:'success',})

  }

  const openInPopUp = (item) => {

      setRecordForEdit(item);
      setOpenPopup(true);
  }

  const onDelete = (id) => {

        setConfirmDialog({...confirmDialog,isOpen:false})
        
      employeeService.deleteEmployee(id);
      setRecords(employeeService.getAllEmployees());
      setNotify({
        isOpen:true,
        message:'This is a success message!',
        type:'error',})
      
  }

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
          onClick={() => {setOpenPopup(true);setRecordForEdit(null);}}
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
              <TableCell>
                  <Controls.ActionButton
                  color="primary"
                  onClick={() => openInPopUp(item)}
                  >
                    <ModeEditOutlineIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                  color="secondary"
                  onClick={() => {
                      //onDelete(item.id)
                      setConfirmDialog({

                        isOpen:true,
                        title:'are you sure to delete this record ?',
                        subTitle:'you can not undo this operation',
                        onConfirm:() => {onDelete(item.id)}
                    })       
                    }}
                  >
                    <ClearIcon fontSize="small" />
                  </Controls.ActionButton>
              </TableCell>
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
        <EmployeeForm
        addOrEdit={addOrEdit} 
        recordForEdit={recordForEdit}
        />
      </Controls.MyPopup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      ></Notification>

      <MyConfirmDialog 
      confirmDialog={confirmDialog}
      setConfirmDialog={setConfirmDialog}
      >

      </MyConfirmDialog>
    </>
  );
};

export default EmployeeList;
