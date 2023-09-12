import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class DetalleCancion extends Component{
    constructor(){
        super(); 
        this.state = {
            dataCancion: [],
        }
    }
    render(){
        return(
            <>
                <h2 class="artistas">Cancion CLICKEADA</h2>
                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
                <article className="cajita-canciones">
                    <h4>El mismo aire</h4>
                    <p>La Konga</p>
                    <iframe src="https://open.spotify.com/embed/track/5Y0hkLkzdrTuPGWYLvm6oO?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </article>
            </>
        )
    }
}
export default DetalleCancion; 

