import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useSelector } from "react-redux";
import { selectCitizenDetail } from "../../../citizenSlice";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      padding: theme.spacing(4),
      position: "sticky",
      top: 90,
    },
    avatar: {
      height: 150,
      width: 150,
    },
    uploadButton: {
      marginTop: 20,
      marginBottom: 20,
      "& span": {
        marginLeft: 10,
      },
    },
    info: {
      textAlign: "center",
    },
  })
);

interface CitizenInfoQuickViewProps {
  isNew?: boolean;
}

const CitizenInfoQuickView = (props: CitizenInfoQuickViewProps) => {
  const style = useStyles();
  const detail = useSelector(selectCitizenDetail);
  const { isNew } = props;

  return (
    <Paper className={style.container}>
      <Avatar color={"gray"} className={style.avatar} src={detail?.avatar} />
      <Button color="primary" className={style.uploadButton}>
        <PhotoCamera />
        <span>Change Photo</span>
      </Button>
      {!isNew && (
        <>
          <Typography
            className={style.info}
            variant="h6"
            gutterBottom
          >{`${detail?.firstName} ${detail?.lastName}`}</Typography>
          <Typography
            className={style.info}
            variant="subtitle2"
          >{`${detail?.address},`}</Typography>
          <Typography
            className={style.info}
            variant="subtitle2"
          >{`${detail?.areaId}`}</Typography>
        </>
      )}
    </Paper>
  );
};

export default CitizenInfoQuickView;
