import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import ModalBook from "./ModalBook";

const useStyles = makeStyles({
        root: {
            //maxWidth: 445,
            width:300
        },
        media: {
            height: 240,
        },
    })


export default function MediaCard({bike}) 
{
    const[isOpen, setOpen] = useState(false)
    const classes = useStyles();
    return(
        <>
        <ModalBook open = {isOpen} onClose = {()=>setOpen(false)} bike={bike}/>
        <Card className={classes.root}>
                <CardMedia 
                    image = {bike.image}
                    className={classes.media}
                    title={bike.title}
                />
                <CardContent>
                    <Typography gutterBottom variant ="h5" component="h2">
                        lasdpoasd
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {bike.description}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="medium" color="primary" onClick={() => {setOpen(true)}}>Book</Button>
            </CardActions>
        </Card>
        </>
    );
}