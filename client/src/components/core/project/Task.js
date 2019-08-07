import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// import history from "../../../history";

const useStyles = makeStyles({
    task: {
        width: "100%",
        // display: "flex",
        flexShrink: 1,
        flexGrow: 1,
        padding: "12px 16px",
        margin: "5px 0",
        display: "inline-block",
        fontWeight: 600,
        background: "#fff",

        color: "#3d474d",
        border: "2px solid transparent",
        borderRadius: "9px",
        boxShadow:
            " 0px 0px 0px 1px rgba(0, 0, 0, 0.02),  0px 1px 2px 0px rgba(0, 0, 0, 0.05),  0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
        textOverflow: "ellipsis"
    }
});

const Task = props => {
    const classes = useStyles();

    // const handleClick = () => {
    //     console.log(props);
    // };

    return (
        <Link
            to="/app/task/ldkjfkdjf"
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "95%",
                flexShrink: 1,
                flexGrow: 1,
                cursor: "pointer",
                textDecoration: "none"
            }}
            // onClick={props.setTaskModalLocation}
            // onClick={() => <TaskModal />}
        >
            <div className={classes.task}>{props.task}</div>
        </Link>
    );
};

export default Task;
