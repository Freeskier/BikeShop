import React from 'react'
import './Book.css'
import 'date-fns'
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    picker: {
        padding:30
    }
})


export default function Book(){
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="main">
            <MuiPickersUtilsProvider 
            utils={DateFnsUtils}
            className={classes.picker}
            >
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date from"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'}}
                />

                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date to"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'}}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}
