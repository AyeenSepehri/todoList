import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from "./Input.module.css"
import { useState } from "react"
export default function FullWidthTextField() {

    const [todoItem , setTodoItem] = useState("")

    const handleChange = (e) => {
        setTodoItem(e.target.value)
    }

    

  return (
    <Box
      className={classes.box}
    >
      <TextField sx={{
        width: 500,
      }} 
        label="fullWidth" 
        id="fullWidth" 
        onChange={handleChange}
        />
    </Box>
  );
}