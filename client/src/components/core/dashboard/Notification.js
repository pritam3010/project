import React from "react";

import Notification from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  notification: {
    width: "33%",
    paddingRight: "30px"
  },
  notificationHeading: {
    height: "60px",
    display: "flex",
    alignItems: "center"
  },
  head: {
    paddingLeft: "10px"
  },
  hr: {
    marginRight: "15px",
    background: "rgba(255, 255, 255, 0.4)"
  }
});
function Notificaton() {
  const classes = useStyles();
  return (
    <div className={classes.notification}>
      <div className={classes.notificationHeading}>
        <Notification />
        <Typography variant="h6" className={classes.head}>
          Notification
        </Typography>
      </div>
      <Divider className={classes.hr} />
    </div>
  );
}

export default Notificaton;
