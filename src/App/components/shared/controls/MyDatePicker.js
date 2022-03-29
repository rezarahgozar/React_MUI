import React from 'react';
import LocalizationProvider  from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

export default function MyDatePicker(props) {

    const { name, label, value, onChange} = props;

    const convertToDefEventPara = (name,value) => ({
        target:{
            name,value
        }
    })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker 
        label={label}
        name={name}
        value={value}
        onChange={date => onChange(convertToDefEventPara(name,date))}
        renderInput={(params) => <TextField {...params} />}
        />

    </LocalizationProvider>
  )
}
