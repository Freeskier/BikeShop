import MediaCard from "./MediaCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import './Bikes.css'

export default function Bikes() 
{
    const mediaCards = [
        {
            bike:{
                image: "https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20200317/SWIAT/200319192/AR/0/AR-200319192.jpg?imageversion=Artykul&lastModified=",
                title: "Piesek",
                description: "asdasdasd",
                id:1
            },
        },
        {
            bike:{
                image: "https://www.rp.pl/apps/pbcsi.dll/storyimage/RP/20200317/SWIAT/200319192/AR/0/AR-200319192.jpg?imageversion=Artykul&lastModified=",
                title: "Piesek",
                description: "asdasdasd",
                id:2
            },
        }

    ]
  

    return( 
        <>
        <h1>Book a bike</h1>
        <div className="cont">
       
        <Box p={5}>
            <Grid container spacing={5}>
                {mediaCards.map((mediaCard, i) => {
                    return(
                        <Grid key = {i} item>
                        <MediaCard {...mediaCard}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
        </div>
        </>
    );
}