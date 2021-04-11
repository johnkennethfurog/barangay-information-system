import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { WrapperVariant } from "@material-ui/pickers/wrappers/Wrapper";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import moment from "moment";

interface DatePickerProps {
  value: ParsableDate;
  onChange: (value: moment.Moment) => void;
  variant?: WrapperVariant;
}

const AppDatePicker = (props: DatePickerProps) => {
  return (
    <KeyboardDatePicker
      disableToolbar
      inputVariant="outlined"
      variant="inline"
      format="MM-DD-YYYY"
      id="date-picker-inline"
      label="Date of Birth"
      value={props.value}
      style={{ width: "100%" }}
      onChange={(date: MaterialUiPickersDate | null, value?: string | null) => {
        const val = !!value ? value : "";
        props.onChange(moment(val));
      }}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

export default AppDatePicker;
