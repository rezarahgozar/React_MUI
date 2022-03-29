import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useEffect, useState } from "react";

export default function MySelect(props) {

  const { name, label, value, onChange,options} = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select 
      label={label} 
      name={name} 
      value={value} 
      onChange={onChange}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
