import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

const Add = () => {
  
   
  
  return (
    <>
 
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="filled-basic" label="NAME" variant="filled" />
      <TextField id="filled-basic" label="ID" variant="filled" />
      <TextField id="filled-basic" label="DEPT" variant="filled" />
      <TextField id="filled-basic" label="Semester" variant="filled" />
      <TextField id="filled-basic" label="cgpa" variant="filled" />
      <Button variant="contained" disableElevation>
      REGISTER
      
    </Button>
    
    
      
      
    </Box>
    
    </>
  )
}

export default Add