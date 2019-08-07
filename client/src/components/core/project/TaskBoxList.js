import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import checkIcon from "./checkIcon";
import AddIcon from "@material-ui/icons/Add";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";

import TaskBox from "./TaskBox";

const useStyles = makeStyles({
    box: {
        width: "320px",
        minWidth: "320px",
        height: "calc(100vh - 64px)",
        background: "transparent",
        color: "white"
    },
    title: {
        backgroundColor: "#edf1f2",
        color: "#0fabf9",
        // fontSize: "14px",
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
        marginRight: "10px",
        height: "21px",
        width: "21px",
        color: "#0af"
    },

    task: {
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px"
    },
    addIcon: {
        background: "white",
        borderRadius: "100%",

        cursor: "pointer",
        color: "#00aaff",
        boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px",
        "& svg": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    noTask: {
        color: "#8a9499",
        width: "inherit",
        padding: "0 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40%"
    },
    tick: {
        borderRadius: "50%",
        color: "white",
        height: "24px",
        width: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    check: {
        color: "rgb(138, 148, 153)",
        marginBottom: "40px",
        width: "120px",
        height: "120px"
    }
});

const TaskBoxList = props => {
    const classes = useStyles();
    const tabs = [
        {
            tabName: "open",
            color: "red"
        },
        { tabName: "In Progress", color: "violet" },
        { tabName: "Done", color: "lightgreen" }
        // { tabName: "Pending", color: "lightblue" },
        // { tabName: "Waiting for Approval", color: "lightred" }
    ];
    const colors = [
        "#47cc8a",
        "#00aaff",
        "#30bfbf",
        "#8acc47",
        "#8f7ee6",
        "#ffd500",
        "#ff9f1a",
        "#d93651",
        "#98aab3"
    ];

    return (
        <>
            <PerfectScrollbar style={{ display: "flex" }}>
                {tabs.map((tab, i) => {
                    const background =
                        i % 2 === 0 ? "transparent" : "rgba(0, 0, 0, 0.02)";
                    return (
                        <TaskBox
                            key={i}
                            tabName={tab.tabName}
                            tabColor={colors[i]}
                            background={background}
                            setTaskModalLocation={props.setTaskModalLocation}
                        />
                    );
                })}
                <div
                    className={classes.box}
                    style={{
                        background:
                            tabs.length % 2 === 0
                                ? "transparent"
                                : "rgba(0, 0, 0, 0.02)"
                    }}
                >
                    <div className={classes.title}>
                        <AddIcon className={classes.icon} />
                        <div style={{ fontSize: "14px", fontWeight: "600" }}>
                            Add Section
                        </div>
                    </div>
                    <div className={classes.task}>
                        <div className={classes.noTask}>
                            <div className={classes.check}>{checkIcon}</div>
                            <div style={{ fontWeight: "bold" }}>No Tasks</div>
                            <Typography variant="body2">
                                click + to add new tasks.
                            </Typography>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>
        </>
    );
};

export default TaskBoxList;
