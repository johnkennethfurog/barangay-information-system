import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import moment from "moment";

import React from "react";
import { Blotter } from "../../../../../models/blotter";

interface BlotterItemProps {
  blotter: Blotter;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderWidth: 0.5,
      borderRadius: 25,
      borderColor: theme.palette.grey[300],
      backgroundColor: theme.palette.grey[200],
      borderStyle: "solid",
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(3),
    },
    date: {
      fontSize: 12,
    },
    complain: {
      fontSize: 14,
    },
    peopleGrid: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    subjectGrid: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "end",
      },
    },
  })
);

const BlotterItem = (props: BlotterItemProps) => {
  const style = useStyles();
  const {
    date,
    caseNumber,
    complain,
    complainant,
    respondent,
    subject,
  } = props.blotter;
  return (
    <div className={style.container}>
      <Grid container>
        <Grid className={style.peopleGrid} item xs={12} sm={12} md={6}>
          <Typography variant="subtitle2">{complainant.join(",")}</Typography>
          <Typography variant="caption">Complainant/s</Typography>
          <Typography
            style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}
            variant="subtitle2"
          >
            -- Versus --
          </Typography>
          <Typography variant="subtitle2">{respondent.join(",")}</Typography>
          <Typography variant="caption" gutterBottom>
            Respondent/s
          </Typography>
        </Grid>
        <Grid className={style.subjectGrid} item xs={12} sm={12} md={6}>
          <Typography className={style.date} color="textSecondary">
            {moment(date).format("MMMMM DD,YYYY")}
          </Typography>
          <Typography variant="subtitle2">
            Barangay Case Number: {caseNumber}
          </Typography>
          <Typography variant="subtitle2">For: {subject}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography style={{ textAlign: "center" }} variant="subtitle1">
            COMPLAIN
          </Typography>
          <pre className={style.complain}>{complain}</pre>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlotterItem;
