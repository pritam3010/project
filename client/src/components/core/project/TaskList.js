import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import checkIcon from "./checkIcon";
import AddIcon from "@material-ui/icons/Add";
// import TeamSvg from "./team.svg";

import Task from "./Task";

const useStyles = makeStyles({
    addIcon: {
        background: "white",
        borderRadius: "100%",
        cursor: "pointer",
        color: "#00aaff",
        marginTop: "15px",
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
    },
    input: {
        resize: "none",
        overflowY: "hidden",
        boxSizing: "border-box",
        width: "95%",
        // height: "22px",
        padding: "12px 16px",
        margin: "5px 0",
        display: "inline-block",
        fontWeight: 600,
        color: "#3d474d",
        border: "2px solid #00aaff",
        borderRadius: "9px",
        boxShadow:
            " 0px 0px 0px 1px rgba(0, 0, 0, 0.02),  0px 1px 2px 0px rgba(0, 0, 0, 0.05),  0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
        "&:focus": {
            outline: "none"
        }
    }
});

const TaskList = props => {
    const classes = useStyles();
    const [showTaskInput, setShowTaskInput] = useState(false);
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const renderInput = () => {
        setShowTaskInput(true);
    };
    const handleInput = () => {
        if (value) setTasks([...tasks, value]);
        setValue("");
        setShowTaskInput(false);
    };
    const handleInputChange = e => {
        setValue(e.target.value);
    };
    const renderTaskInput = () => {
        if (!showTaskInput) {
            return "";
        }
        return (
            <textarea
                rows={1}
                height="auto"
                tabIndex="0"
                onBlur={handleInput}
                autoFocus
                className={classes.input}
                selected
                value={value}
                onChange={handleInputChange}
            />
        );
    };
    return (
        <>
            {!tasks
                ? ""
                : tasks.map((task, id) => (
                      <Task
                          key={id}
                          task={task}
                          setTaskModalLocation={props.setTaskModalLocation}
                      />
                  ))}
            {renderTaskInput()}

            {showTaskInput ? (
                ""
            ) : (
                <div className={classes.addIcon}>
                    <AddIcon onClick={renderInput} />
                </div>
            )}
            {!showTaskInput && tasks.length === 0 ? (
                <div className={classes.noTask}>
                    <div className={classes.check}>{checkIcon}</div>
                    {/* <TeamSvg height={"112px"} width={"112px"} /> */}
                    {/* <TeamSvg className={classes.checkIcon} /> */}
                    <div style={{ fontWeight: "bold" }}>No Tasks</div>
                    <Typography variant="body2">
                        click + to add new tasks.
                    </Typography>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default TaskList;
