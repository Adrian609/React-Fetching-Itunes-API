import React, {Component} from 'react';


class FetchAPI extends Component {
    constructor() {
        super();
        this.state = {
            artistName: [],
        };
    }

    componentWillMount() {
        fetch('https://itunes.apple.com/search?term=jack+johnson&limit=25').then(results => {
            return results.json();
        }).then(data=>{
            let artistNames = data.results.map((album)=>{
                return(
                    <div key={album.results}>
                        <p>Artist: {album.artistName},<br/>Collection Name: {album.collectionName} </p>
                        <img src={album.artworkUrl100} /> 
                    </div>
                )
            })
            this.setState({artistNames: artistNames});
            console.log("state", this.state.artistNames);
        })
    }

    render(){
        return(
            <div className ="container2">
                <div className = "container1">
                    {this.state.artistNames}
                </div>
            </div>
        )
    }
}

export default FetchAPI;