import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useSelector } from "react-redux";
import { selectCitizenDetail } from "../../../citizenSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.text.secondary,
    },
    avatar: {
      background: "red",
      height: 150,
      width: 150,
    },
    uploadButton: {
      marginTop: 30,
      "& span": {
        marginLeft: 10,
      },
    },
  })
);

const CitizenInfoAvatar = () => {
  const style = useStyles();
  const avatar = useSelector(selectCitizenDetail)?.avatar || "";
  return (
    <div className={style.container}>
      <Avatar className={style.avatar} src={avatar} />
      <Button color="primary" className={style.uploadButton}>
        <PhotoCamera />
        <span>Change Photo</span>
      </Button>
    </div>
  );
};

export default CitizenInfoAvatar;
