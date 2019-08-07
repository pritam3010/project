import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import EmojiPicker from "./EmojiPicker";

const useStyles = makeStyles(theme => ({
    inline: {
        display: "inline"
    },
    title: {
        padding: "0 10px",
        margin: "30px 0 20px ",
        fontSize: "16px",
        lineHeight: "16px",
        fontWeight: 500
    },
    textarea: {
        border: "1px solid #dce2e6",
        borderRadius: "5px",
        padding: "8px 12px",
        resize: "none",
        color: "#3d474d",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "22px",
        width: "100%",
        minHeight: "104px",
        boxSizing: "border-box",
        "&:focus": {
            outline: "none",
            border: "1px solid #007bff",
            borderRadius: "5px"
        },
        "&::placeholder": {
            color: "#dce2e6"
        }
    },
    emoji: {
        cursor: "pointer",
        color: "#dce2e6",
        "&:hover": {
            color: "#007bff"
        }
    },
    btnContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0 10px"
    },
    btnComment: {
        fontSize: "15px",
        // fontWeight: 500,
        height: "36px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "1px solid #007bff",
        borderRadius: "5px",
        padding: "0 15px",
        opacity: 0.4,
        cursor: "default"
    }
}));

const Activity = props => {
    const classes = useStyles();
    const [showEmoji, setShowEmoji] = useState(false);
    const [comment, setComment] = useState();
    const handleCommentChane = event => {
        setComment(event.target.value);
    };
    const onAddComment = () => {
        props.addComment(comment);
        setComment("");
    };
    const toggleEmojiPicker = () => {
        setShowEmoji(!showEmoji);
    };
    const addEmoji = emoji => {
        const text = `${comment}${emoji.native}`;
        setComment(text);
        setShowEmoji(false);
    };

    return (
        <div>
            <div className={classes.title}>Activity</div>
            <div style={{ margin: "0 10px" }}>
                <textarea
                    className={classes.textarea}
                    placeholder="Add Comment"
                    value={comment}
                    spellCheck="false"
                    onChange={handleCommentChane}
                />

                <div className={classes.btnContainer}>
                    <EmojiPicker
                        addEmoji={addEmoji}
                        showEmoji={showEmoji}
                        toggleEmojiPicker={toggleEmojiPicker}
                    />
                    <div
                        className={classes.btnComment}
                        style={comment ? { opacity: 1, cursor: "pointer" } : {}}
                        onClick={onAddComment}
                    >
                        Add
                    </div>
                </div>

                {/* <CommentList activity={props.activity} /> */}
            </div>
        </div>
    );
};

export default Activity;
