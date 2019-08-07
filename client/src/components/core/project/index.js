import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import BellIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

import TaskBoxList from "./TaskBoxList";

const styles = {
    root: {
        flexGrow: 1,

        "& header": {
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 5px 0px",
            zIndex: 1
        }
    },
    line: {
        width: "1px",
        height: "32px",
        backgroundColor: "#edf1f2",
        margin: "0 15px"
    },
    rightHeader: {
        display: "flex"
    },
    content: {
        display: "flex",
        background:
            "linear-gradient(-45deg, rgb(245, 247, 248), rgb(237, 241, 242) 100%)"
    }
};

class Project extends Component {
    state = {
        tab: [
            { name: "open" },
            { name: "In progress" },
            { name: "Done" },
            { name: "open" }
        ]
    };

    setTaskModalLocation = () => {
        const isTaskModal = true;
        this.props.getLocation(this.props.location, isTaskModal);
    };
    render() {
        const { classes } = this.props;
        console.log(this.props);

        return (
            <>
                <div className={classes.root}>
                    <AppBar
                        style={{ background: "white !important" }}
                        position="static"
                        color="default"
                    >
                        <Toolbar>
                            <Link to="/app/dashboard">
                                <HomeIcon />
                            </Link>
                            <div className={classes.line} />
                            <div className={classes.project}>Project</div>
                            <div className={classes.line} />
                            <div className={classes.rightHeader}>
                                <AddCircleIcon />
                                <div className={classes.line} />
                                <CheckCircleIcon />
                                <BellIcon />
                                <div className={classes.line} />
                                <SearchIcon />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TaskBoxList
                        setTaskModalLocation={this.setTaskModalLocation}
                    />
                </div>
            </>
        );
    }
}
export default withStyles(styles)(Project);
/*
rgb(217, 054, 081)
rgb(255, 159, 026)
rgb(255, 213, 000)
rgb(138, 204, 071)
rgb(071, 204, 138)
rgb(048, 191, 191)
rgb(000, 170, 255)
rgb(143, 126, 230)
rgb(152, 170, 179)
rgb(240, 240, 244)
#edf0f1
#d93651
#ff9f1a,
#ffd500,
#8acc47,
#47cc8a,
#30bfbf,
#00aaff,
#8f7ee6,
#98aab3,
#f0f0f4

const color=[#47cc8a,#00aaff,#8acc47,#8f7ee6,#30bfbf,#ffd500,#ff9f1a,#d93651,#98aab3]
#edf1f2

*/
