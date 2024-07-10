import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Record = () => {
    function createData(ID, NAME, DEPT, SEMESTER, CGPA) {
        return { ID, NAME, DEPT, SEMESTER, CGPA };
      }
      
      const rows = [
        createData('Adharsh','B22CS1104','s5','cs','8.5'),
        createData('Rohit','B22CS1105','s5','cs','8.5'),
        createData('Gagan','B22CS1106','s5','cs','8.5'),
        createData('Varun','B22CS1107','s5','cs','8.5'),
        createData('Faris','B22CS1108','s5','cs','8.5'),
      ];
      
  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">DEPT</TableCell>
            <TableCell align="right">SEMESTER</TableCell>
            <TableCell align="right">CGPA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.NAME}
              </TableCell>
              <TableCell align="right">{row.ID}</TableCell>
              <TableCell align="right">{row.SEMESTER}</TableCell>
              <TableCell align="right">{row.DEPT}</TableCell>
              <TableCell align="right">{row.CGPA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Record