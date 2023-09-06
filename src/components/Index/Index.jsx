import React, { Component } from "react";

class Index extends Component{
    constructor(){
        super(); 
        this.state = {
            dataArtist: [],
            dataMusic: [],
            dataAlbums: [],
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/')
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataAlbums: data.albums.data, 
                dataArtist: data.artists.data, 
                dataMusic: data.tracks.data 
            })
        // console.log(data.albums);
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })
    }


    render(){
        console.log(this.state.dataArtist);

        return(     
            <section>
                <h2 className="h2artistas">TOP Artistas</h2>
                <main className="cantantes">
                    {this.state.dataArtist.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataArtist.map((unArtista,idx ) => (
                            <div key={idx} className='album'>
                                <img src={unArtista.picture} alt="" />
                                <p key={idx}>{unArtista.name}</p>
                            </div>
                        ))
                    )
                    
                }

                </main>
                <h2 className="h2albumes">TOP Albumes</h2>
                <main className="albumesfotos">
                {this.state.dataAlbums.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataAlbums.map((unAlbum, idx) => (
                            <div key={idx} className='album'>
                              <img src={unAlbum.cover} alt="" />
                              <div>
                                <p>{unAlbum.title}</p>
                              </div>
                            </div>
                          ))
                          
                    )
                    
                }
                </main>
                <h2 className="h2canc">TOP Canciones</h2>
                <main className="cancionesindex">
                {this.state.dataAlbums.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataMusic.map((unaMusica, idx) => (
                            <div key={idx} className='album'>
                              <img src={unaMusica.artist.picture} alt="" />
                              <div>
                                <p>{unaMusica.title} de {unaMusica.artist.name}</p>
                              </div>
                            </div>
                          ))
                          
                    )
                    
                }
                </main>
            </section>
        )
    }
}

export default Index