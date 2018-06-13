import React, { Component } from 'react';
import FetchAPI from '../controller/FetchAPI';
import Details from '../view/Details';

<FetchAPI/>

class DetailsModel extends Details.Component {
    
    constructor (){
       super();
       this.album={
               key = album.collectionId,
                art= album.artworkUrl100,
                album = album.collectionId,
                name = album.artistName,
                yeaR =new Date(album.releaseDate).getFullYear(),
        };
    }
}
export default DetailsModel.js;