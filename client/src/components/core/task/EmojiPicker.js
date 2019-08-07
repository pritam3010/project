import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Emoji from "@material-ui/icons/InsertEmoticon";

const useStyles = makeStyles(theme => ({
    emoji: {
        cursor: "pointer",
        color: "#dce2e6",
        "&:hover": {
            color: "#007bff"
        }
    }
}));
const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: "transparent"
    }
}))(Tooltip);

function EmojiPicker(props) {
    const classes = useStyles();
    const { addEmoji, showEmoji, toggleEmojiPicker } = props;
    return (
        <LightTooltip
            title={
                <ClickAwayListener onClickAway={toggleEmojiPicker}>
                    <Picker set="emojione" onSelect={addEmoji} />
                </ClickAwayListener>
            }
            open={showEmoji}
            interactive
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClose={toggleEmojiPicker}
        >
            <Emoji
                className={classes.emoji}
                style={showEmoji ? { color: "#007bff" } : {}}
                onClick={toggleEmojiPicker}
            />
        </LightTooltip>
    );
}

export default EmojiPicker;
