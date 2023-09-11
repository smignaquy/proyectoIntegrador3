import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class VerTodoCanciones extends Component{
    constructor(){
        super(); 
        this.state = {
            dataMusic: [],
            limit: 10,
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/data/tracks?index=0&limit=${this.state.limit}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataMusic: data.data, 
            })
            // console.log(data);
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })
    }

    cargarMas(){
        this.setState({
            limit: this.state.limit +10
        }
        )
    }

    render(){
        return(
            <>
                <h2 class="artistas">Todas las canciones</h2>
                <main className="cancionesindex">
                    {this.state.dataMusic.length === 0 ? (
                            <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                        ) : (
                            this.state.dataMusic.map((unaMusica, idx) => (
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
                <div className="btnVer">
                    <p>Total Artistas: {this.state.limit} </p>
                    <button id="btn" className="btnVer" onClick={()=>{this.cargarMas(); this.componentDidMount();}}>Apreta dos veces para Cargar más</button>
                </div>
            </>
        )
    }
}
export default VerTodoCanciones;