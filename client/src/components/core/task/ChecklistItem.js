import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import { makeStyles } from "@material-ui/styles";
import UnchekedCircle from "@material-ui/icons/RadioButtonUnchecked";
import CheckedCircle from "@material-ui/icons/CheckCircle";
import DragBar from "@material-ui/icons/Menu";
import DeletIcon from "@material-ui/icons/Close";
import DownArrow from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "#f7f9fa",
            borderRadius: "5px",
            "& .makeStyles-hoverIcon-192": {
                opacity: 1
            }
        }
        // "&:focus": {
        //     backgroundColor: "#f7f9fa",
        //     borderRadius: "5px"
        // },
        // "&:active": {
        //     backgroundColor: "#f7f9fa",
        //     borderRadius: "5px"
        // }
    },
    nameInput: {
        padding: "8px 0",
        paddingLeft: "5px",
        width: "100%",
        fontSize: "14px",

        borderWidth: 0,
        outline: "none",
        color: "#3d474d",
        textOverflow: "ellipsis",
        backgroundColor: "transparent",
        resize: "none"
        // "&:focus": {
        //     backgroundColor: "#f7f9fa",
        //     borderRadius: "5px"
        // }
    },
    checklist: {
        cursor: "text",
        padding: "7px 10px",
        paddingLeft: "5px",
        width: "100%",
        fontSize: "14px",
        lineHeight: "22px",
        color: "#3d474d",
        textOverflow: "ellipsis",
        backgroundColor: "transparent"
    },
    toggleIcon: {
        color: "#007bff",
        cursor: "pointer"
    },
    hoverIcon: {
        height: "100%",
        color: "#3d474d",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        "&:hover": {
            opacity: 1
        }
    },

    hoverIcon1: {
        height: "18px",
        width: "18px",
        marginRight: "5px",
        cursor: "grab"
    },
    hoverIcon2: {
        width: "16px",
        height: "16px",
        marginRight: "5px",
        paddingTop: "1px",
        cursor: "pointer"
    },
    hoverIcon3: {
        height: "16px",
        width: "16px",
        cursor: "pointer",
        paddingTop: "1px"
    }
}));

const ChecklistItem = props => {
    const classes = useStyles();
    console.log(classes);
    const [textareaValue, setTextareaValue] = useState("");
    const [editInput, setEditInput] = useState(false);

    const handleTextareaChange = e => {
        setTextareaValue(e.target.value);
    };
    const handleBlurTextarea = () => {
        if (props.showInput) {
            // setEditInput(false);
            props.addChecklist(textareaValue);
        }

        if (!props.showInput) {
            props.editChecklist(props.id, textareaValue);
            setEditInput(false);
        }
    };

    const editChecklist = () => {
        setEditInput(true);
        setTextareaValue(props.text);
    };
    const toggleChecklistStatus = () => {
        props.toggleChecklistStatus(props.id);
    };
    const handleRemoveChecklist = () => {
        props.removeChecklist(props.id);
    };
    const { text, status } = props;
    return (
        <div
            className={classes.container}
            // syle={
            //     showInput
            //         ? { backgroundColor: "#f7f9fa", borderRadius: "5px" }
            //         : {}
            // }
        >
            <div className={classes.toggleIcon} onClick={toggleChecklistStatus}>
                {status ? <CheckedCircle /> : <UnchekedCircle />}
            </div>
            {props.showInput || editInput ? (
                <Textarea
                    spellCheck={false}
                    className={classes.nameInput}
                    autoFocus
                    onBlur={handleBlurTextarea}
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
            ) : (
                <div
                    style={{
                        width: "100%",
                        textDecoration: status ? "line-through" : "",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div onClick={editChecklist} className={classes.checklist}>
                        {text}
                    </div>
                    <div className={classes.hoverIcon}>
                        <DragBar className={classes.hoverIcon1} />
                        <DeletIcon
                            className={classes.hoverIcon2}
                            onClick={handleRemoveChecklist}
                        />
                        <DownArrow className={classes.hoverIcon3} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChecklistItem;
