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
      marginTop: 15,
    },
    complain: {
      fontSize: 14,
    },
  })
);

const BlotterItem = (props: BlotterItemProps) => {
  const style = useStyles();
  const { date } = props.blotter;
  return (
    <div className={style.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="subtitle2">
            {props.blotter.complainant.join(",")}
          </Typography>
          <Typography variant="caption">Complainant/s</Typography>
          <Typography
            style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}
            variant="subtitle2"
          >
            -- Versus --
          </Typography>
          <Typography variant="subtitle2">
            {props.blotter.respondent.join(",")}
          </Typography>
          <Typography variant="caption" gutterBottom>
            Respondednt/s
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "end" }} item xs={12} sm={12} md={6}>
          <Typography className={style.date} color="textSecondary">
            {moment(date).format("MMMMM DD,YYYY")}
          </Typography>
          <Typography variant="subtitle2">
            Barangay Case Number: 10-1101-002
          </Typography>
          <Typography variant="subtitle2">
            For: {props.blotter.subject}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography style={{ textAlign: "center" }} variant="subtitle1">
            COMPLAIN
          </Typography>
          <pre className={style.complain}>{props.blotter.complain}</pre>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlotterItem;
