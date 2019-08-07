import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Greeting from "./Greeting";
import Task from "./Task";
import Notification from "./Notification";
import image from "../../../assests/img/mountain.jpg";

const useStyle = makeStyles({
    root: {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        color: "white"
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    content: {
        height: "calc(100vh - 80px)",
        paddingLeft: "30px",
        display: "flex"
    }
});

function Dashboard() {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.container}>
                <Header />
                <div className={classes.content}>
                    <Greeting />
                    <Task />
                    <Notification />
                </div>
            </div>
            <div />
        </div>
    );
}

export default Dashboard;
