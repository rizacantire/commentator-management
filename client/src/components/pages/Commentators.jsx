import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getCommentatorAsync,commentatorList, addCommentatorAsync } from '../../redux/reduce/commentatorSlice';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function Commentators() {
  const dispatch = useDispatch()
  const getData = useSelector(commentatorList)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  console.log(getData);

  const handleSubmit = async ()=>{
    //e.preventDefault()
    let com = {firstName: firstName,lastName:lastName}
    await dispatch(addCommentatorAsync(com))
    console.log(firstName,lastName);
  }

  useEffect(() => {
    dispatch(getCommentatorAsync())
    
   }, [dispatch])
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>İsim</TableCell>
              <TableCell>Soyisim</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getData.map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="left">{data.firstName}</TableCell>
                <TableCell align="left">{data.lastName}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   
      </div>
  )
}
