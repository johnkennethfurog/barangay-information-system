import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Section from "../../../../../components/section/section";
import { useSelector } from "react-redux";
import { selectCitizenDetail } from "../../../citizenSlice";
import DocumentItem from "./document-item";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(4),
    },
    content: {
      padding: theme.spacing(4),
    },
    table: {},
  })
);

const CitizenDocuments = () => {
  const style = useStyles();
  const documents = useSelector(selectCitizenDetail)?.documents || [];
  return (
    <Section
      className={style.container}
      contentClassName={style.content}
      title="Requested Documents"
    >
      <TableContainer>
        <Table className={style.table} aria-label="document table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Doocument Type</TableCell>
              <TableCell>Purpose</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((document, index) => (
              <DocumentItem key={index} document={document} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default CitizenDocuments;
