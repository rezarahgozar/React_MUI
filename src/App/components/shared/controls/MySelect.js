import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useEffect, useState } from "react";
import { FormHelperText } from "@mui/material";

export default function MySelect(props) {

  const { name, label, value, error = null ,onChange,options} = props;

  return (
    <FormControl variant="outlined"{...(error && {error : true})} >

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
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
