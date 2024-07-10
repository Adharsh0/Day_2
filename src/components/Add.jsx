import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import react,{useState} from 'react'


const Add = ({person}) => {
  // const[count,setCount]=useState(0);
   let valueAdd=()=>{
     console.log(form)
  }
  const[form,setForm]=useState(
  { NAME:person.NAME,
  ID:person.ID,
  DEPT:person.DEPT,
  SEM:person.SEM,
  cgpa:person.cgpa
  }
  )
  function valueCap(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }

   
  
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
      <TextField id="filled-basic" label="NAME" variant="filled"
      name='NAME' value={form.NAME} onChange={valueCap} />
      <TextField id="filled-basic" label="ID" variant="filled"
      name='ID' value={form.ID} onChange={valueCap} />
     
    
      <TextField id="filled-basic" label="DEPT" variant="filled" 
      name='DEPT' value={form.DEPT} onChange={valueCap}/>
      <TextField id="filled-basic" label="SEM" variant="filled"
      name='SEM' value={form.SEM} onChange={valueCap} />
      <TextField id="filled-basic" label="cgpa" variant="filled"
      name='cgpa' value={form.cgpa} onChange={valueCap} />
      <Button variant="contained" disableElevation onClick={valueAdd}> REGISTER </Button>
     
       
    
    
    
      
      
    </Box>
    
    </>
  )
}

export default Add