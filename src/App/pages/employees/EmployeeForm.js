import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
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
  { id: "female", title: "Feale" },
  { id: "other", title: "Other" },
];
const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <>
      <Form>
        <Grid container>
          <Grid item sx={6}>
            <Controls.MyInput
              name="fullName"
              label="Full Name"
              Value={values.fullName}
              onChange={handleInputChange}
            />
            <Controls.MyInput
              name="email"
              label="Email"
              Value={values.email}
              onChange={handleInputChange}
            />
            <Controls.MyInput
              name="mobile"
              label="Mobile"
              Value={values.mobile}
              onChange={handleInputChange}
            />
            <Controls.MyInput
              name="city"
              label="City"
              Value={values.city}
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
            />
            <Controls.MyDatePicker
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.MyCheckBox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
            <div>
                <Controls.MyButton type="submit" variant="contained" color="primary" size="large" text="Submit" />
                <Controls.MyButton color="default" text="Reset" />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default EmployeeForm;
