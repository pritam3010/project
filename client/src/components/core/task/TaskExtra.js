import React, { useState } from "react";
import Calendar from "@material-ui/icons/CalendarTodayRounded";
import TagIcon from "@material-ui/icons/Label";
import Watching from "@material-ui/icons/AlarmOn";
import { makeStyles } from "@material-ui/core/styles";

import "date-fns";
import { format } from "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
    container: {
        height: "60px",
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        color: "#8a9499",
        cursor: "pointer",
        borderBottom: "1px solid #dce2e6"
    },
    text: {
        padding: "2px 10px 0",
        fontSize: "14px",
        fontWeight: 500
    }
}));
const TaskEXtra = props => {
    const classes = useStyles();
    const [calender, setCalendar] = useState(false);
    const handleDateChange = date => {
        props.handleDateChange(date);
    };
    const selectedDate = new Date();

    return (
        <>
            <div>
                <div className={classes.container}>
                    <div
                        style={{
                            display: "inline-flex",
                            color: !props.dueDate ? "" : "#ffa726"
                        }}
                        onClick={() => setCalendar(true)}
                    >
                        <div>
                            <Calendar />
                        </div>
                        <div className={classes.text}>
                            {!props.dueDate
                                ? "Due Date"
                                : `Due on ${format(
                                      props.dueDate,
                                      "dd MMM, yyyy"
                                  )}`}
                        </div>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                            clearable
                            clearLabel="Clear Due Date"
                            open={calender}
                            onOpen={() => setCalendar(true)}
                            onClose={() => setCalendar(false)}
                            value={selectedDate}
                            onChange={handleDateChange}
                            onError={console.log}
                            minDate={new Date()}
                            format="yyyy/MM/dd hh:mm a"
                            style={{
                                height: 0,
                                width: 0
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <TagIcon />
                </div>
                <div className={classes.text}>Tag</div>
            </div>
            <div className={classes.container}>
                <div>
                    <Watching />
                </div>
                <div className={classes.text}>Watching</div>
            </div>
        </>
    );
};

export default TaskEXtra;
