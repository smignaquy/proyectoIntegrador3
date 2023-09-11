import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class DetalleArtista extends Component{
    constructor(){
        super(); 
        this.state = {
            dataArtist: [],
        }
    }
    render(){
        return(
            <>
                <h2 class="artistas">Artista CLICKEADO</h2>
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
export default DetalleArtista;