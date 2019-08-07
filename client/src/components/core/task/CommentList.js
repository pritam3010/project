import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import Comment from "./Comment";

const useStyles = makeStyles(theme => ({
    commentList: {
        "& ul .MuiList-root .makeStyles-root-99 .MuiList-padding": {
            marginRight: 0,
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        }
    },
    inline: {
        display: "inline"
    }
}));

const CommentList = props => {
    const classes = useStyles();
    console.log(props.activity);

    return (
        <List className={classes.commentList}>
            {props.activity.map((obj, index) => {
                return <Comment key={index} {...obj} />;
            })}
        </List>
    );
};

export default CommentList;
