import React, { Component } from "react";

class Favoritos extends Component{
    constructor(props){
        super(props); 
        this.state = {
            textoFavoritos:"Agregar a Favoritos",
            favoritos: false,
        }
    }
    botonFavoritos(){
        if(this.state.favoritos == false){
            this.setState({
                textoFavoritos : 'Quitar de favoritos',
                favoritos: true
            })
        } else{
            this.setState({
                textoFavoritos: 'Agregar a favoritos',
                favoritos: false
            })
        }
    }
    render(){
        return(
            <>
                <h2 class="favoritos"> <botton> AGREGAR A FAVORITOS </botton> </h2>
                <button className='btnFavoritos'type='button'> onClick={() => this.botonFavoritos()} {this.state.favoritos}</button> 
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
export default Favoritos; 