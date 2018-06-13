import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DetailsModel from '../model/DetailsModel';

<DetailsModel/>
const Details = ()=>{
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
    )

    render()
        return(
            <div className="">
                {Details}
            </div>
        )
    
}




export default Details;
