import React, { useEffect } from "react";
import {
  Button,
  Grid,
  InputLabelProps,
  MenuItem,
  Paper,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useInput from "../../../../../hooks/useInput";
import useDateInput from "../../../../../hooks/useDateInput";
import AppDatePicker from "../../../../../components/date-picker/date-picker";
import { useDispatch, useSelector } from "react-redux";
import { resetCitizenForm, selectCitizenDetail } from "../../../citizenSlice";
import moment from "moment";
import { selectLookup } from "../../../../../app/commonSlice";
import { LookupType } from "../../../../../models/lookup-type.enum";
import { LookupItem } from "../../../../../models/lookup-item";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    form: {
      color: theme.palette.text.secondary,
      display: "flex",
      flexWrap: "wrap",
    },
    btnSave: { margin: theme.spacing(1) },
  })
);

const inputLabelProps: InputLabelProps = {
  shrink: true,
};

interface CitizenInfoProps {
  isNew?: boolean;
}

const CitizenInfoForm = (props: CitizenInfoProps) => {
  const { isNew } = props;
  const history = useHistory();
  const detail = useSelector(selectCitizenDetail);
  const dispatch = useDispatch();
  const style = useStyles();
  const areaLookups = useSelector(selectLookup(LookupType.Area)) || [];

  const [firstName, bindFirstName, setFirstName] = useInput("");
  const [lastName, bindLastName, setLastName] = useInput("");
  const [middleName, bindMiddleName, setMiddleName] = useInput("");
  const [area, bindArea, setArea] = useInput(0);
  const [address, bindAddress, setAddress] = useInput("");
  const [email, bindEmail, setEmail] = useInput("");
  const [mobileNo, bindMobileNum, setMobileNumber] = useInput("");

  const [dateOfBirth, bindDateOfBirth, setDateOfBirth] = useDateInput(moment());

  useEffect(() => {
    setDetail();
  }, [detail]);

  const setDetail = () => {
    if (!!detail) {
      setFirstName(detail?.firstName);
      setLastName(detail?.lastName);
      setMiddleName(detail?.middleName);
      setArea(detail?.areaId);
      setAddress(detail?.address);
      setEmail(detail?.email);
      setMobileNumber(detail?.mobileNo);
      setDateOfBirth(moment(detail?.dateOfBirth));
    }
  };

  const onSave = () => {
    const payload: any = {
      firstName,
      lastName,
      middleName,
      area,
      address,
      email,
      mobileNo,
      dateOfBirth,
    };

    console.log("payload", payload);
  };

  const onCancel = () => {
    if (isNew) {
      history.goBack();
    } else {
      setDetail();
    }
  };

  return (
    <Paper className={style.container}>
      <form className={style.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="citizenId"
              label="Citizen ID"
              variant="outlined"
              fullWidth
              value={detail?.citizenId || ""}
              InputProps={{ disabled: true }}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              {...bindFirstName}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              {...bindLastName}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="middleName"
              label="Middle Name"
              variant="outlined"
              fullWidth
              {...bindMiddleName}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="email"
              label="Email"
              type="emil"
              fullWidth
              variant="outlined"
              {...bindEmail}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="mobileNumber"
              type="tel"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              {...bindMobileNum}
              InputLabelProps={inputLabelProps}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              id="area"
              label="Area/Purok"
              variant="outlined"
              fullWidth
              select
              {...bindArea}
              InputLabelProps={inputLabelProps}
            >
              {areaLookups.map((option: LookupItem) => (
                <MenuItem key={option.value} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AppDatePicker {...bindDateOfBirth} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              {...bindAddress}
              InputLabelProps={inputLabelProps}
              fullWidth
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "flex-end" }}
            item
            xs={12}
          >
            <Button
              onClick={onCancel}
              className={style.btnSave}
              color="default"
            >
              {isNew ? "Cancel" : "Undo Changes"}
            </Button>
            <Button
              onClick={onSave}
              className={style.btnSave}
              variant="contained"
              color="secondary"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CitizenInfoForm;
