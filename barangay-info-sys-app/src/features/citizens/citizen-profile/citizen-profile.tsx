import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import { RouteParams } from "../../../models/route-params";
import { fetchCitizenDetail } from "../citizenSlice";
import CitizenBlotters from "./sections/citizen-blotters";
import CitizenDocuments from "./sections/citizen-documents";
import CitizenInfo from "./sections/citizen-info";
const CitizenProfile = () => {
  const dispatch = useDispatch();
  const { citizenId } = useParams<RouteParams>();
  useEffect(() => {
    dispatch(fetchCitizenDetail(+citizenId));
  }, []);

  return (
    <div>
      <CitizenInfo></CitizenInfo>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <CitizenBlotters></CitizenBlotters>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <CitizenDocuments></CitizenDocuments>
        </Grid>
      </Grid>
    </div>
  );
};

export default CitizenProfile;
