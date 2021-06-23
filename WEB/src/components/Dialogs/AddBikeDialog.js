import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import 'date-fns'
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";


const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
    text:{
        width:'25ch'
    },
    content:{
        margin:'5px'
    },
    dialog:{
        border:'2px',
        borderRadius:'20px',
        borderColor:'#FF0000'
    }
    
  });

export default function AddBikeDialog({open, onClose})
{
    const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

    const handleDateChangeFrom = (date) => {
        setSelectedDateFrom(date);
    };
    const handleClose = () => {
        onClose(false);
      };

    const handleDateChangeTo = (date) => {
        setSelectedDateTo(date);
    };


    const classes = useStyles();

    return(
        <Dialog 
        borderRadius='20px'
        border='2px'
        borderColor='#FF0000'
         onClose={handleClose} 
         aria-labelledby="simple-dialog-title" 
         open={open}>
            <DialogTitle id="simple-dialog-title">Jaskis tam tytlul</DialogTitle>
            <DialogContent aria-orientation="vertical">
            <Grid container spacing={1}>
            <Grid item>
            <TextField
                placeholder="Name"
                label="Name"
                variant="outlined"
                color='#FF0000'/>
                </Grid>
                <Grid item>
            <TextField
                placeholder="Adress"
                label="Adress"
                variant="outlined"
                color='#FF0000'
                />
                </Grid>
            </Grid> 
            <Grid item xs={6}>
                <Button variant="contained" color="primary">Add reservation!</Button>
            </Grid>
            </DialogContent>
            
        </Dialog>
    )
}