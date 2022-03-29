import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import React from "react";

const MyCheckBox = (props) => {
  const { name, label, value, onChange, items } = props;

const convertToDefEventPara = (name,value) => ({
    target:{
        name,value
    }
})

  return(
  <FormControl>
    <FormControlLabel
      label={label}
      control={<Checkbox 
        name={name} 
        checked={value} 
        onChange={e => onChange(convertToDefEventPara(name,e.target.checked))} 
        color="primary" />}
    ></FormControlLabel>
  </FormControl>
  )
};

export default MyCheckBox;
