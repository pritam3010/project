import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  task: {
    width: "32%"
  },
  taskHeading: {
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
function Task() {
  const classes = useStyles();
  return (
    <div className={classes.task}>
      <div className={classes.taskHeading}>
        <CheckCircle />
        <Typography variant="h6" className={classes.head}>
          My Task
        </Typography>
      </div>
      <Divider className={classes.hr} />
    </div>
  );
}
export default Task;
