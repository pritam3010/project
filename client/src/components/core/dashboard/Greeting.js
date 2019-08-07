import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";

const useStyles = makeStyles({
    greeting: {
        width: "35%",
        margin: "auto 0 4rem 0",
        paddingRight: "20px",
        "& h2": {
            fontWeight: 400
        }
    }
});

function Greeting() {
    const classes = useStyles();
    // const hour = new Date().getHours();
    return (
        <div className={classes.greeting}>
            <Typography variant="h5">Good Evening, Pritam</Typography>
            <Typography mt="20" variant="h2">{`${format(new Date(), "h:mm a")} 
      `}</Typography>
            <p>
                ”I have not failed. I've just found <br />
                10,000 ways that won't work.”
                <br />
                <span>Thomas Edison</span>
            </p>
        </div>
    );
}

export default Greeting;
