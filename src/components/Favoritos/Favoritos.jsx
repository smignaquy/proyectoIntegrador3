import React, { Component } from "react";

class Favoritos extends Component{
    constructor(props){
        super(props); 
        this.state = {
            textoBoton:"Agregar a Favoritos",
        }
    }
    render(){
        return(
            <>
                <h2 class="favoritos"> <botton> AGREGAR A FAVORITOS </botton> </h2>
                <button className='link'type='button'> {this.state.textoBoton} </button>
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