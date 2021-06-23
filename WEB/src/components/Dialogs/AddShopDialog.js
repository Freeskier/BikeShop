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
import ShopService from '../../services/ShopService';


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

export default function AddShopDialog({open, onClose, adress, position})
{
    const[name, setName] = React.useState("")
    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const handleClose = () => {
        onClose(false);
      };


    function onBtnClick() {
        ShopService.add(name, adress, position.lat, position.lng)
    }
    const classes = useStyles();

    return(
        <Dialog 
        borderRadius='20px'
        border='2px'
        borderColor='#FF0000'
         onClose={handleClose} 
         aria-labelledby="simple-dialog-title" 
         open={open}>
            <DialogTitle id="simple-dialog-title">Do you want to add new shop here?</DialogTitle>
            <DialogContent aria-orientation="vertical">
            <Grid container spacing={1} direction="column">
            <Grid item>
            <TextField
                placeholder="Shop name"
                label="Shop name"
                variant="outlined"
                color='#FF0000'
                onChange={handleChange}/>
                </Grid>
                <Grid item>
            <TextField
                placeholder="Address"
                label="Address"
                variant="outlined"
                color='#FF0000'
                value={"" + adress !== ""?adress:""}/>
                </Grid>
            </Grid> 
            <Grid item >
                <Button variant="contained" color="primary" onClick={onBtnClick}>Add shop</Button>
            </Grid>
            </DialogContent>
            
        </Dialog>
    )
}