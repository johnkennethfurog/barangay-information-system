import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
import { Document } from "../../../../../models/document";

interface DocummentItemProps {
  document: Document;
  index: number;
}

const DocumentItem = (props: DocummentItemProps) => {
  const { document, index } = props;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {document.date}
      </TableCell>
      <TableCell>{document.documentType}</TableCell>
      <TableCell>{document.purpose}</TableCell>
    </TableRow>
  );
};

export default DocumentItem;
