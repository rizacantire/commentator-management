import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, FlexboxGrid, Button } from "rsuite";
import {
  getCommentatorMatchAsync,
  commentatorMatchList,
} from "../../redux/reduce/commentatorMatchSlice";
export default function CommentatorMatchs() {
  const dispatch = useDispatch();
  const getData = useSelector(commentatorMatchList);
  console.log(getData);
  useEffect(() => {
    dispatch(getCommentatorMatchAsync());
  }, [dispatch]);

  return (
    <div>
      <FlexboxGrid justify="center">
        <Table
          style={{ fontSize: "13px" }}
          autoHeight={true}
          data={getData}
          width={900}
          headerHeight={54}
          rowHeight={38}
        >
          <Table.Column width={80} align="center" fixed>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
          <Table.Column width={140} align="center" fixed>
            <Table.HeaderCell width={"%5"}>Ev Sahibi</Table.HeaderCell>
            <Table.Cell dataKey="match.homeName" />
          </Table.Column>
          <Table.Column width={140} align="center" fixed>
            <Table.HeaderCell>Konuk Takım</Table.HeaderCell>
            <Table.Cell dataKey="match.awayName" />
          </Table.Column>

          <Table.ColumnGroup header="Skor" align="center">
            <Table.Column width={20}>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.Cell dataKey="match.homegoalcount" />
            </Table.Column>
            <Table.Column width={15}>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.Cell>-</Table.Cell>
            </Table.Column>
            
            <Table.Column width={20}>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.Cell dataKey="match.awaygoalcount" />
            </Table.Column>
          </Table.ColumnGroup>
          <Table.ColumnGroup header="Spiker" align="center">
          <Table.Column width={60} align="center" fixed>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.Cell dataKey="commentator.firstName" />
          </Table.Column>
          <Table.Column width={50} align="center" fixed>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.Cell dataKey="commentator.lastName" />
          </Table.Column>
          </Table.ColumnGroup>
        </Table>
      </FlexboxGrid>
      <Button>Kayıt Ekle</Button>
    </div>
  );
}
