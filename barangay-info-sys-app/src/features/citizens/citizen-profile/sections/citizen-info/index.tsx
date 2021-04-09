import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import { CitizenDetail } from "../../../../../models/citizen-detail";
import CitizenInfoForm from "./citizen-info-form";
import CitizenInfoAvatar from "./citizen-info-avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(4),
      padding: theme.spacing(4),
    },
  })
);

const CitizenInfo = () => {
  const style = useStyles();
  return (
    <Paper className={style.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <CitizenInfoAvatar />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <CitizenInfoForm />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CitizenInfo;
