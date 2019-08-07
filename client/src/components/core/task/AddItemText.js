import React from "react";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
    containerOuter: {
        paddingLeft: "12px",
        fontSize: "14px",
        color: "#007bff",
        height: "32px",
        display: "flex",
        alignItems: "center"
    },
    containerInner: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontWeight: 500
    },
    addIcon: {
        width: "20px",
        height: "20px"
    },
    text: {
        paddingLeft: "5px"
    }
}));

const AddItemText = ({ text, ...rest }) => {
    const classes = useStyles();
    return (
        <div {...rest} className={classes.containerOuter}>
            <div className={classes.containerInner}>
                <AddIcon className={classes.addIcon} />
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    );
};

export default AddItemText;
