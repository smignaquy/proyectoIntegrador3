import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Tarjeta from '../../components/Tarjeta/Tarjeta'

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
                <div className="btnVer">
                    <h2 className="h2artistas">TOP Artistas</h2>
                    <button id="btn" className="btnVer"><Link to='/vertodo/artistas'>Ver todos</Link></button>
                </div>
                    <main className="cantantes">
                        {this.state.dataArtist.length  ===0 ? (
                            <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                        ) : (
                            this.state.dataArtist.slice(5).map((unArtista,idx ) => (
                                <Tarjeta data={unArtista} key={unArtista.id}/>
                            ))
                        )
                        
                    }
                    </main>

            </section>
        )
    }
}

export default Index