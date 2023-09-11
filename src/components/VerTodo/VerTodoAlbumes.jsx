import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class VerTodoAlbumes extends Component{
    constructor(){
        super(); 
        this.state = {
            dataAlbums: [],
            limit: 10,
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/data/albums?index=0&limit=${this.state.limit}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataAlbums: data.data, 
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
                <h2 class="artistas">Todas los albumes</h2>
                <main className="albumesfotos">
                {this.state.dataAlbums.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataAlbums.map((unAlbum, idx) => (
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
                <div className="btnVer">
                    <p>Total Albumes: {this.state.limit} </p>
                    <button id="btn" className="btnVer" onClick={()=>{this.cargarMas(); this.componentDidMount();}}>Apreta dos veces para Cargar más</button>
                </div>
            </>
        )
    }
}
export default VerTodoAlbumes;