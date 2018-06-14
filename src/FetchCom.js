import React, {
    Component
} from 'react';

//var myRequest = new Request('https://itunes.apple.com/search?term=jack+johnson&limit=25');

let searchBox = "Kanye";
class FetchCom extends Component {
        constructor() {
            super();
            this.state = {
                artistNames: [],
                searchBox:'Kanye'
            };
        }
        componentWillMount() {
            fetch('https://itunes.apple.com/search?term='+searchBox+'&limit=25').then(results => {
                return results.json();
            }).then(data=>{
                
                let artistNames = data.results.map((album)=>{
                    return(
                        <div className='card mb-4 box-shadow' >
                            <img className="card-img-top"data-holder-rendered="true"src={album.artworkUrl100}   /> 
                                <div className="card-body">
                                    <p className="card-text">Artist: {album.artistName}<br/>Song: {album.collectionName}</p>
                                    
                                </div>
                            </div>
                    )
                    
                })
                this.setState({artistNames});
                console.log("state", this.state.artistNames);
            })
        }
        handleChange(e){
            const searchBox = e.target.value;
            this.props.changeArtist(searchBox);
        }
    
        changeArtist(searchBox){
            this.setState({searchBox});
        }
        render(){
            

            return(
                <div>
                <form>
                        <div class="form-group ">
                        <input type="text" placeholder="Kanye West" onChange={this.handleChange.bind(this)}className="form-control"  />
                    </div>
                </form>
                <div className="row">
                        {this.state.artistNames}
                    </div>
            </div>
            )
        }
    }
    


export default FetchCom;