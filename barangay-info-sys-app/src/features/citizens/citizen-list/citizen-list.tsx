import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { fetchCitizens, selectCitizens } from "../citizenSlice";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import style from "../../../App.style";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    table: {},
  })
);

const CitizenList = () => {
  const citizens = useSelector(selectCitizens);
  const dispatch = useDispatch();
  const history = useHistory();
  const style = useStyles();

  useEffect(() => {
    dispatch(fetchCitizens());

    return () => {
      console.log("unmounting");
    };
  }, []);

  const onClickView = (citizenId: number) => {
    history.push(`/citizens/${citizenId}`);
  };

  return (
    <TableContainer className={style.container} component={Paper}>
      <Table className={style.table} aria-label="citizen table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Area</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {citizens.map((citizen) => (
            <TableRow key={citizen.citizenId}>
              <TableCell>{citizen.firstName}</TableCell>
              <TableCell>{citizen.lastName}</TableCell>
              <TableCell>{citizen.dateOfBirth}</TableCell>
              <TableCell>{citizen.address}</TableCell>
              <TableCell>{citizen.area}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => onClickView(citizen.citizenId)}
                  aria-label="view"
                >
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CitizenList;
