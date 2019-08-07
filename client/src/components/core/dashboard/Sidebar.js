import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import {
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";

import { createProject, getProjects } from "../../../actions";
import NewProjectForm from "../../modals/NewProjectForm";
import svg from "./svg";
import imageBlurred from "../../../assests/img/mountain-blurred.jpg";

const styles = {
    sidebar: {
        backgroundImage: `url(${imageBlurred})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "lightgrey",
        zIndex: 10
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        height: "80px",
        margin: "0 20px"
    },
    logo: {
        height: "48px",
        width: "114px"
    },
    project: {
        margin: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        "& div": {
            cursor: "pointer"
        }
    },
    addIcon: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "100%",
        width: "20px",
        height: "20px",
        " svg": {
            widht: "100%",
            height: "100%"
        }
    },
    divider: {
        margin: "0 20px",
        background: "rgba(255, 255, 255, 0.4)"
    }
};

function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
}

class Sidebar extends Component {
    state = {
        open: false
    };
    componentDidMount() {
        this.props.getProjects();
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
        console.log(this.state);
    };
    onProjectFormSubmit = async newProject => {
        await this.props.createProject(newProject);
        this.setState({ open: false });
    };

    renderProjectList = () => {
        if (!this.props.projects) {
            return "";
        }
        return this.props.projects.map(p => (
            <ListItemLink to={`/app/project/${p._id}`} key={p._id} button>
                <ListItemText primary={p.name} />
            </ListItemLink>
        ));
    };
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.sidebar} style={{ width: "410px" }}>
                <div className={classes.logoContainer}>
                    <div className={classes.logo}>{svg}</div>
                </div>
                <div className={classes.project}>
                    <Typography variant="h6">Projects</Typography>
                    <div onClick={this.handleClickOpen}>
                        <Add className={classes.addIcon} />
                    </div>
                </div>
                <Divider className={classes.divider} />
                <div>
                    <List component="nav" aria-label="Project List">
                        {this.renderProjectList()}
                        {/* <ListItemLink href="#simple-list">
                          <ListItemText primary="Spam" />
                            </ListItemLink> */}
                    </List>
                </div>
                <NewProjectForm
                    open={this.state.open}
                    handleClose={this.handleClose}
                    onFormSubmit={this.onProjectFormSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { projects: state.projects.projects };
};
export default connect(
    mapStateToProps,
    { createProject, getProjects }
)(withStyles(styles)(Sidebar));
