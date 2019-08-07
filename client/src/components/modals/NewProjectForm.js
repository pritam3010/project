import React, { useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
    newProjectForm: {
        width: "400px"
    },
    marign: { margin: theme.spacing(5) }
}));

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",

        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase);

function NewProjectForm(props) {
    const classes = useStyles();
    const { open, handleClose, onFormSubmit } = props;

    const [projectName, setPorjectName] = useState("");
    const [projectDesc, setPorjectDesc] = useState("");

    function handleNameChange(e) {
        setPorjectName(e.target.value);
    }
    function hadnleDescChange(e) {
        setPorjectDesc(e.target.value);
    }
    function handleProjectForm() {
        const newProject = { name: projectName, desc: projectDesc };
        setPorjectName("");
        setPorjectDesc("");
        onFormSubmit(newProject);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Add a Project</DialogTitle>
            <DialogContent>
                <DialogContentText />
                <div className={classes.newProjectForm}>
                    <FormControl className={classes.margin}>
                        <BootstrapInput
                            fullWidth
                            placeholder="New Project"
                            id="projectName"
                            name="projectName"
                            autoComplete="off"
                            value={projectName}
                            onChange={handleNameChange}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <BootstrapInput
                            fullWidth
                            type="textarea"
                            placeholder="Add description"
                            id="projectDesc"
                            name="projectDesc"
                            autoComplete="off"
                            value={projectDesc}
                            onChange={hadnleDescChange}
                        />
                    </FormControl>
                </div>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary">
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    disabled={!projectName}
                    color="primary"
                    onClick={handleProjectForm}
                >
                    Create Project
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewProjectForm;
