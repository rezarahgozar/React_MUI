import { TextField } from "@mui/material";
import React from "react";

export default function MyInput(props) {
  const { name, label, value,error = null, onChange } = props;

  return (

    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && {error : true,helperText:error})}
    />

  );
}
