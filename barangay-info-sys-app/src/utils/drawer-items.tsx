import { DrawerItem } from "../models/drawer-item";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import VideocamIcon from "@material-ui/icons/Videocam";
import PeopleIcon from "@material-ui/icons/People";
import ErrorIcon from "@material-ui/icons/Error";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";

const drawerItems: DrawerItem[] = [
  {
    iconComponent: <DashboardIcon />,
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    iconComponent: <AssignmentIcon />,
    title: "Blotters",
    route: "/blotters",
  },
  {
    iconComponent: <DescriptionIcon />,
    title: "Documents",
    route: "/documents",
  },
  {
    iconComponent: <VideocamIcon />,
    title: "CCTV",
    route: "/cctvs",
  },
  {
    iconComponent: <PeopleIcon />,
    title: "Citizens",
    route: "/citizens",
  },
  {
    iconComponent: <ErrorIcon />,
    title: "Incidents",
    route: "/incidents",
  },
  {
    iconComponent: <NotificationsIcon />,
    title: "Notification",
    route: "/notifications",
  },
];

export default drawerItems;
