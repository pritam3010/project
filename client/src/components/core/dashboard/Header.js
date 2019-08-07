import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
    header: {
        height: "80px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 30px",
        color: "white"
    },
    addIcon: {
        width: "64px",
        height: "32px",
        padding: "0 20px",
        "& svg path:last-of-type": {
            width: "24px",
            height: "24px",
            cursor: "pointer"
        }
    },
    SearchIcon: {
        height: "32px",
        width: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            width: "26px",
            height: "100% !important",
            cursor: "pointer"
        }
    },
    name: {
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "100%",
        height: "32px",
        width: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px",
        cursor: "pointer"
    }
}));
const Header = props => {
    const classes = useStyles();
    const { auth } = props;

    const renderInitial = () => {
        if (!auth.user) {
            return "HI";
        }
        return auth.user.initial;
    };
    return (
        <header className={classes.header}>
            <div className={classes.addIcon}>
                <AddCircleIcon />
            </div>
            <div className={classes.SearchIcon}>
                <SearchIcon style={{ height: "24px" }} />
            </div>
            <div>
                <div className={classes.name}>{renderInitial()}</div>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return { auth: state.auth };
};
export default connect(mapStateToProps)(Header);

// function Sidebar(props) {
//     const classes = useStyle();
//     const [open, setOpen] = useState(false);
//     function handleClickOpen() {
//         setOpen(true);
//     }
//     function handleClose() {
//         setOpen(false);
//     }

//     const [project, setProject] = useState([]);

//     function renderProjectList() {
//         return project.map(p => (
//             <ListItem button>
//                 <ListItemText primary={p.name} />
//             </ListItem>
//         ));
//     }
//     function onProjectFormSubmit(newProject) {
//         setProject([...project, newProject]);
//         console.log(project);
//         setOpen(false);
//     }
//     return (
//         <div className={classes.sidebar} style={{ width: "410px" }}>
//             <div className={classes.logoContainer}>
//                 <div className={classes.logo}>{svg}</div>
//             </div>
//             <div className={classes.project}>
//                 <Typography variant="h6">Projects</Typography>
//                 <div onClick={handleClickOpen}>
//                     <Add className={classes.addIcon} />
//                 </div>
//             </div>
//             <Divider className={classes.divider} />
//             <div>
//                 <List component="nav" aria-label="Project List">
//                     {renderProjectList()}
//                     {/* <ListItemLink href="#simple-list">
//               		<ListItemText primary="Spam" />
//            			 </ListItemLink> */}
//                 </List>
//             </div>
//             <NewProjectForm
//                 open={open}
//                 handleClose={handleClose}
//                 onFormSubmit={onProjectFormSubmit}
//             />
//         </div>
//     );
// }
