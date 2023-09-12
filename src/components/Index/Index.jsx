import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Index extends Component{
    constructor(){
        super(); 
        this.state = {
            dataArtist: [],
            dataMusic: [],
            dataAlbums: [],
            verMas: false,
            textoVerMas: 'Ver Más'
        }
    }
    botonVerMas(){
        if(this.state.verMas == false){
            this.setState({
                textoVerMas : 'Ocultar',
                verMas: true
            })
        } else{
            this.setState({
                textoVerMas : 'Ver Más',
                verMas: false
            })
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
                <div className="btnVer">
                    <h2 className="h2artistas">TOP Artistas</h2>
                    <button id="btn" className="btnVer"><Link to='/vertodo/artistas'>Ver todos</Link></button>
                </div>
                    <main className="cantantes">
                        {this.state.dataArtist.length === 0 ? (
                            <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                        ) : (
                            this.state.dataArtist.slice(5).map((unArtista,idx ) => (
                                <div key={idx} className='album'>
                                    <Link to={`/detalle/artista/${unArtista.id}`}>
                                        <img src={unArtista.picture} alt="" />
                                        <div className="nombresIndex">
                                            <p className="nombreHome" key={idx}>{unArtista.name}</p>
                                        </div>
                                    </Link>
                                    <br />
                                    <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>                             
                                </div>
                            ))
                        )
                        
                    }
                    </main>



                <div className="btnVer">
                    <h2 className="h2artistas">TOP Albumes</h2>
                    <button id="btn" className="btnVer"><Link to='/vertodo/albumes'>Ver todos</Link></button>
                </div>
                <main className="albumesfotos">
                {this.state.dataAlbums.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataAlbums.slice(5).map((unAlbum, idx) => (
                            <div key={idx} className='album'>
                                <Link to={`/detalle/album/${unAlbum.id}`}>
                                    <img src={unAlbum.cover} alt="" />
                                    <div className="nombresIndex">
                                        <p className="nombreHome" >{unAlbum.title}</p>
                                    </div>
                                    <br />
                                </Link>
                                <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>  
                            </div>
                          ))
                          
                    )
                    
                }
                </main>


                <div className="btnVer">
                    <h2 className="h2artistas">TOP Canciones</h2>
                    <button id="btn" className="btnVer"><Link to='/vertodo/canciones'>Ver todos</Link></button>
                </div>
                <main className="cancionesindex">
                {this.state.dataMusic.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataMusic.slice(4).map((unaMusica, idx) => (
                            <div key={idx} className='album'>
                                <Link to={`/detalle/cancion/${unaMusica.id}`}>
                                    <img src={unaMusica.artist.picture} alt="" />
                                    <div className="nombresIndex">
                                        <p className="nombreHome">{unaMusica.title} de {unaMusica.artist.name}</p>
                                    </div>
                                </Link>
                                <br />
                                <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>  
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