import React , {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Table, FlexboxGrid, Button } from "rsuite";
import { getCommentatorAsync,commentatorList } from '../../redux/reduce/commentatorSlice';
export default function Commentators() {
  const dispatch = useDispatch()
  const getData = useSelector(commentatorList)

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
      <Button>Kayıt Ekle</Button>
      </div>
  )
}
