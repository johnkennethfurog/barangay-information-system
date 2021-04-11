import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Section from "../../../../../components/section/section";
import { selectCitizenDetail } from "../../../citizenSlice";
import BlotterItem from "./blotter-item";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(4),
    },
    content: {
      padding: theme.spacing(4),
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },
  })
);

const CitizenBlotters = () => {
  const blotters = useSelector(selectCitizenDetail)?.blotters;
  const style = useStyles();

  return (
    <Section
      className={style.container}
      contentClassName={style.content}
      title="Active Blotter"
    >
      {blotters?.map((blotter, index) => {
        return <BlotterItem key={index} blotter={blotter} />;
      })}
    </Section>
  );
};

export default CitizenBlotters;
