import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const Details = ({ cover, name, artist, year})=>{
    return(
    <GridListTile key={cover} style={{margin: '8px'}}>
        <img src={cover} alt ={name} style={{ width:'200px'}}/>
        <GridListTileBar
            title={name}
            subtitle={
                <span>
                    by: {artist} in {year}
                </span>
            }
        />
    </GridListTile>
    )};

export default Details;
