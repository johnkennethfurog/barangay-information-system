import React, { useEffect } from "react";
import { InputLabelProps } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useInput from "../../../../../hooks/useInput";
import useDateInput from "../../../../../hooks/useDateInput";
import AppDatePicker from "../../../../../components/date-picker/date-picker";
import { useSelector } from "react-redux";
import { selectCitizenDetail } from "../../../citizenSlice";
import { CitizenDetail } from "../../../../../models/citizen-detail";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      color: theme.palette.text.secondary,
      display: "flex",
      flexWrap: "wrap",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
    },
  })
);

const inputLabelProps: InputLabelProps = {
  shrink: true,
};

const CitizenInfoForm = () => {
  const detail = useSelector(selectCitizenDetail);

  const [firstName, bindFirstName, setFirstName] = useInput("a");
  const [lastName, bindLastName, setLastName] = useInput("b");
  const [middleName, bindMiddleName, setMiddleName] = useInput("c");
  const [area, bindArea, setArea] = useInput("d");
  const [address, bindAddress, setAddress] = useInput("e");
  const [email, bindEmail, setEmail] = useInput("f");
  const [mobileNo, bindMobileNum, setMobileNumber] = useInput("g");

  const [dateOfBirth, bindDateOfBirth, setDateOfBirth] = useDateInput(moment());

  useEffect(() => {
    if (!!detail) {
      setFirstName(detail?.firstName);
      setLastName(detail?.lastName);
      setMiddleName(detail?.middleName);
      setArea(detail?.area);
      setAddress(detail?.address);
      setEmail(detail?.email);
      setMobileNumber(detail?.mobileNo);
      setDateOfBirth(moment(detail?.dateOfBirth));
    }
  }, [detail]);

  const style = useStyles();
  return (
    <form className={style.form}>
      <TextField
        id="citizenId"
        label="Citizen ID"
        variant="outlined"
        value={detail?.citizenId || ""}
        InputProps={{ disabled: true }}
        InputLabelProps={inputLabelProps}
      />
      <TextField
        id="firstName"
        label="First Name"
        variant="outlined"
        {...bindFirstName}
        InputLabelProps={inputLabelProps}
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="outlined"
        {...bindLastName}
        InputLabelProps={inputLabelProps}
      />
      <TextField
        id="middleName"
        label="Middle Name"
        variant="outlined"
        {...bindMiddleName}
        InputLabelProps={inputLabelProps}
      />

      <TextField
        id="email"
        label="Email"
        type="emil"
        variant="outlined"
        {...bindEmail}
        InputLabelProps={inputLabelProps}
      />

      <TextField
        id="mobileNumber"
        type="tel"
        label="Mobile Number"
        variant="outlined"
        {...bindMobileNum}
        InputLabelProps={inputLabelProps}
      />

      <TextField
        id="area"
        label="Area/Purok"
        variant="outlined"
        {...bindArea}
        InputLabelProps={inputLabelProps}
      />

      <AppDatePicker {...bindDateOfBirth} />

      <TextField
        id="address"
        label="Address"
        variant="outlined"
        {...bindAddress}
        InputLabelProps={inputLabelProps}
        fullWidth
      />
    </form>
  );
};

export default CitizenInfoForm;
