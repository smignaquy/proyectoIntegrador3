import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenCancion extends Component{
    constructor(props){
        super(props); 
        const id = this.props.match.params.id
        this.state = {
            dataCancion: [],
            id : id
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataCancion: data,
            })
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })
    }

    render(){
        return(
            <>
                <h2 class="artistas">Cancion CLICKEADA {this.state.dataCancion.id}</h2>

                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
                <article className="lamona">
                  <img src= {this.state.dataCancion.contributors.picture} alt="portada" />
                    <br />
                    <i className="fa-brands fa-youtube"></i>
                </article>
                <article className="cajita-canciones">
                    <h4>{this.state.dataCancion.title} </h4>
                    <p> {this.state.dataCancion.artist.name} </p>
                    <p> {this.state.dataCancion.album.title} </p>
                    
                    <iframe src="{this.state.dataCancion.artist.share}" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </article>
            </>
        )
    }
}
export default ScreenCancion; 

