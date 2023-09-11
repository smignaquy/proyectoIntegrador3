import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        //llamo a la api
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/')
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataAlbums: data.albums.data, 
                dataArtist: data.artists.data, 
                dataMusic: data.tracks.data 
            })
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
                            this.state.dataArtist.slice(5).map((unArtista,idx ) => (
                                <div key={idx} className='album'>
                                    <Link to={`/detalle/artista/${unArtista.id}`}>
                                        <img src={unArtista.picture} alt="" />
                                        <p className="nombreHome" key={idx}>{unArtista.name}</p>
                                    </Link>
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
                        this.state.dataAlbums.slice(5).map((unAlbum, idx) => (
                            <div key={idx} className='album'>
                                <Link to={`/detalle/album/${unAlbum.id}`}>
                                    <img src={unAlbum.cover} alt="" />
                                    <div>
                                        <p className="nombreHome" >{unAlbum.title}</p>
                                    </div>
                                </Link>
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
                        this.state.dataMusic.slice(5).map((unaMusica, idx) => (
                            <div key={idx} className='album'>
                                <Link to={`/detalle/cancion/${unaMusica.id}`}>
                                    <img src={unaMusica.artist.picture} alt="" />
                                    <div>
                                        <p className="nombreHome">{unaMusica.title} de {unaMusica.artist.name}</p>
                                    </div>
                                </Link>
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