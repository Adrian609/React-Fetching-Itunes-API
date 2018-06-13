import React, {
    Component
} from 'react';
import Details from '../view/Details';

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
        }).then(data => {
            let artistNames = data.results.map((album) => {
                album.collectionId,
                    album.artworkUrl100,
                    album.artistName,
                    new Date(album.releaseDate).getFullYear()
            })
            this.setState({
                artistNames: artistNames
            });
            console.log("state", this.state.artistNames);
        })
    }

    
}

export default FetchAPI;