import { TextField } from "@mui/material";
import React from "react";

export default function MyInput(props) {
  const { name, label, value, onChange } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
