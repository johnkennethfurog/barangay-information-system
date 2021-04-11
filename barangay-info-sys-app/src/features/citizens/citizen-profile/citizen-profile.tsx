import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import { RouteParams } from "../../../models/route-params";
import { addNewCitizen, fetchCitizenDetail } from "../citizenSlice";
import CitizenBlotters from "./sections/citizen-blotters";
import CitizenDocuments from "./sections/citizen-documents";
import CitizenInfoQuickView from "./sections/citizen-info/citizen-info-quickview";
import CitizenInfoForm from "./sections/citizen-info/citizen-info-form";
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { LookupType } from "../../../models/lookup-type.enum";
import { fetchLookups } from "../../../app/commonSlice";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    btnSave: { marginLeft: "auto" },
  })
);

interface CitizenPropileProps {
  isNew?: boolean;
}

const CitizenProfile = (props: CitizenPropileProps) => {
  const { isNew } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const style = useStyles();

  const { citizenId } = useParams<RouteParams>();

  useEffect(() => {
    if (!isNew) {
      dispatch(fetchCitizenDetail(+citizenId));
    } else {
      dispatch(addNewCitizen());
    }

    dispatch(fetchLookups([LookupType.Area]));

    return () => {
      console.log("profile unmounting");
    };
  }, []);

  const onAdd = () => {
    history.push(`/citizens/new`);
  };

  return (
    <Grid container spacing={3}>
      <Grid style={{ display: "flex" }} item xs={12}>
        {!isNew && (
          <Button onClick={onAdd} className={style.btnSave} color="primary">
            <PersonAddIcon style={{ marginRight: 10 }} />
            ADD NEW CITIZEN
          </Button>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CitizenInfoQuickView isNew={isNew} />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <CitizenInfoForm isNew={isNew} />
        {!isNew && (
          <>
            <CitizenDocuments></CitizenDocuments>
            <CitizenBlotters></CitizenBlotters>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default CitizenProfile;
