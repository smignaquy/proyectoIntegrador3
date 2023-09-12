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
                <section>
                    <article class="disc">
                    </article>
                    <main class="cantante">
                    </main>
                </section>
            </>
        )
    }
}
export default DetalleCancion; 

