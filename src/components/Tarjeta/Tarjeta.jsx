import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class TarjetaArtist extends Component{
    constructor(props){
        super(props)
        this.state = {
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

    render(){
        console.log(this.props)
        return(
            <>
            <Link to={`/detalle/artista/${this.props.data.id}`}><h1>Tarjeta</h1></Link>
            {/* <div key={idx} className='album'>
                <Link to={`/detalle/artista/${unArtista.id}`}>
                    <img src={unArtista.picture} alt="" />
                    <div className="nombresIndex">
                        <p className="nombreHome" key={idx}>{unArtista.name}</p>
                    </div>
                </Link>
                <br />
                <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>                             
            </div> */}
            </>
        )
    };
}

export default TarjetaArtist;