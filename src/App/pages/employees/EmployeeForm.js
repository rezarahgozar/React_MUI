import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
import { getDayOfYear } from "date-fns";
import React, { useState, useEffect } from "react";
import { Controls } from "../../components/shared/controls/Controls";
import { useForm, Form } from "../../components/shared/useForm";
import * as employeeService from "../../services/employeeService";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const EmployeeForm = () => {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This fiels is required"
        if('email' in fieldValues)
            temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(fieldValues.email)?"":"This fiels is required"
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ?"":"Minimum 9 character"
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0?"":"This fiels is required"

        setErrors({
            ...temp
        })
        if(fieldValues == values)
            return Object.values(temp).every(x => x=="")
    }

  const { 
      values, 
      setValues,
      errors,
      setErrors, 
      handleInputChange,
      resetForm 

    } = useForm(initialFValues,true,validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
      if(validate()){
        employeeService.insertEmployee(values)
        resetForm();
      }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item sx={6}>
            <Controls.MyInput
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Controls.MyInput
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.MyInput
              name="mobile"
              label="Mobile"
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.MyInput
              name="city"
              label="City"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item sx={6}>
            <Controls.MyRadioGroup
              name="gender"
              Label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
            <Controls.MySelect
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            />
            <Controls.MyDatePicker
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />
           
            <div>
                <Controls.MyButton type="submit" variant="contained" color="primary" size="large" text="Submit" />
                <Controls.MyButton color="default" text="Reset" onClick={resetForm} />
            </div>
          </Grid>
        </Grid>
      </Form>

    </>
  );
};

export default EmployeeForm;
