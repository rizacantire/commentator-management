import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Table, FlexboxGrid, Button ,Form,ButtonToolbar} from "rsuite";
import { getCommentatorAsync,commentatorList, addCommentatorAsync } from '../../redux/reduce/commentatorSlice';
export default function Commentators() {
  const dispatch = useDispatch()
  const getData = useSelector(commentatorList)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

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
      <FlexboxGrid justify="center">
        <Table data={getData}  width={800} height={300} >
          <Table.Column align="center" fixed>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
          <Table.Column align="center" fixed>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.Cell dataKey="firstName" />
          </Table.Column>
          <Table.Column align="center" fixed>
            <Table.HeaderCell>Soy Adı</Table.HeaderCell>
            <Table.Cell dataKey="lastName" />
          </Table.Column>
        </Table>
      </FlexboxGrid>

      <Form>
    <Form.Group controlId="firstName">
      <Form.ControlLabel>Adı</Form.ControlLabel>
      <Form.Control  onChange={(e)=>setFirstName(e)} name="firstName" />
    </Form.Group>
    <Form.Group controlId="lastName">
      <Form.ControlLabel>Soyadı</Form.ControlLabel>
      <Form.Control onChange={(e)=>setLastName(e)} name="lastName" />
    </Form.Group>
    
    
    <Form.Group>
      <ButtonToolbar>
        <Button onClick={handleSubmit} appearance="primary">Ekle</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
   
      </div>
  )
}
