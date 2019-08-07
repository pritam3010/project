import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import Checklist from "./Checklist";
import Attachment from "./Attachment";
import TaskExtra from "./TaskExtra";
import TastCreation from "./TaskCreation";
import Activity from "./Activity";
import CommentList from "./CommentList";

const styles = theme => ({
    modal: {
        background: "white",
        width: "700px",
        borderRadius: "10px"
    },
    top: {
        height: "75px",
        width: "100%",
        borderBottom: "1px solid #dce2e6",
        padding: "20px 20px 20px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btnComplete: {
        color: "white",
        backgroundColor: "#007bff",
        height: "35px",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: "15px",
        border: "1px solid #007bff",
        borderRadius: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
    },
    closeIcon: {
        width: "35px",
        height: "35px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            width: "16px",
            height: "16px"
        }
    },
    bottom: {
        display: "flex"
    },
    left: {
        width: "460px",
        padding: "20px",
        display: "flex",
        flexDirection: "column"
    },
    taskName: {
        padding: "5px 10px",
        height: "38px",
        display: "inline-flex",
        alignItems: "center",
        color: "#3d474d",
        fontSize: "22px",
        fontWeight: 500,
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px"
        }
    },
    taskDesc: {
        margin: "5px 0",
        padding: "5px 10px",
        color: "#8a9499",
        fontSize: "14px",
        lineHeight: "22px",
        "&:hover": {
            backgroundColor: "#f7f9fa"
        }
    },
    right: {
        width: "240px",
        borderLeft: "1px solid #dce2e6",
        borderBottomRightRadius: "10px",
        backgroundColor: "#f7f9fa",
        color: "#8a9499"
    }
});

class Task extends Component {
    state = {
        open: true,
        dueDate: null,
        activity: [{ text: "Pritam created the task", createdAt: new Date() }]
    };
    handleClose = () => {
        this.setState({ open: false });
        this.props.history.goBack();
    };
    handleDateChange = date => {
        this.setState({ dueDate: date }, () => {
            if (!date) {
                this.setState({
                    activity: [
                        {
                            text: "Pritam removed a due date",
                            createdAt: new Date(),
                            type: "DUEDATE"
                        },
                        ...this.state.activity
                    ]
                });
            } else {
                this.setState({
                    activity: [
                        {
                            text: "Pritam set a due date",
                            dueDate: date,
                            createdAt: new Date(),
                            type: "DUEDATE"
                        },
                        ...this.state.activity
                    ]
                });
            }
        });
    };
    addComment = comment => {
        if (comment)
            this.setState({
                activity: [
                    {
                        text: comment,
                        createdAt: new Date(),
                        creator: "pritam",
                        type: "COMMENT"
                    },
                    ...this.state.activity
                ]
            });
    };
    render() {
        const { classes } = this.props;
        return (
            <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                scroll="body"
                maxWidth={false}
            >
                <div className={classes.modal}>
                    <div className={classes.top}>
                        <div className={classes.btnComplete}>Complete</div>
                        <div
                            className={classes.closeIcon}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.left}>
                            <div className={classes.taskName}>Hello</div>
                            <div className={classes.taskDesc}>
                                This task has no notes.
                            </div>
                            <Checklist />
                            <Attachment />

                            <Activity
                                activity={this.state.activity}
                                addComment={this.addComment}
                            />
                            <CommentList activity={this.state.activity} />
                        </div>
                        <div className={classes.right}>
                            <TaskExtra
                                handleDateChange={this.handleDateChange}
                                dueDate={this.state.dueDate}
                            />
                            <TastCreation />
                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(Task);
