import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Open from "@material-ui/icons/AlternateEmail";

import TaskList from "./TaskList";

const useStyles = makeStyles({
    box: {
        width: "320px",
        minWidth: "320px",
        height: "calc(100vh - 80px)",
        background: "transparent",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        height: "60px",
        padding: "0 20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
    },
    icon: {
        margin: "auto 0",
        marginRight: "15px"
    },
    task: {
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px"
    },
    tabInput: {
        boxSizing: "border-box",
        display: "inline-block",
        transform: "translateX(-5px)",
        padding: "5px",
        borderRadius: "5px",
        border: "none",
        background: "#fff",
        "&:focus": {
            outline: "none"
        }
    }
});

const TaskBox = props => {
    const classes = useStyles();

    const [showTabInput, setShowTabInput] = useState(false);
    // const [task, setTask] = useState([]);

    const renderTabInput = e => {
        setShowTabInput(true);
    };
    const handleInput = () => {
        setShowTabInput(false);
    };
    const handleFocus = e => {
        e.target.select();
    };
    return (
        <div className={classes.box} style={{ background: props.background }}>
            <div
                className={classes.title}
                style={{ backgroundColor: props.tabColor }}
            >
                <Open className={classes.icon} />
                {!showTabInput ? (
                    <div onClick={renderTabInput} style={{ flexGrow: 1 }}>
                        {props.tabName}
                    </div>
                ) : (
                    <input
                        className={classes.tabInput}
                        value={props.tabName}
                        autoFocus
                        onFocus={handleFocus}
                        onBlur={handleInput}
                    />
                )}
            </div>
            <div className={classes.task}>
                <TaskList setTaskModalLocation={props.setTaskModalLocation} />
            </div>
        </div>
    );
};

export default TaskBox;
