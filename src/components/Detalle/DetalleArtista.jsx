import React, { Component } from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

class DetalleArtista extends Component{
    constructor(props){
        super(); 
        this.state = {
            dataArtist: [],
            aElegido: [],
            id : props.match.params.id
        }
    }

    componentDidMount(props){
        //let id = props.match.params.id
        //console.log(props)
        //llamo a la api
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/')
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataArtist: data.artists.data,
            })
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })

        //this.artistaClickeado(id)
    }

    artistaClickeado(id){
        //  Desarrollar el método
        let artistaElegido = this.state.dataArtist.filter(function(unArtista){
            //tenemos que chequear si el tecto a filtrar esta dentro del nonmbre del personaje. Usemos la funcion includes()
            return unArtista.id.includes(id)
        })
        
        this.setState({
            aElegido: artistaElegido,
        })}

    render(){
        return(
            <>
                <h2 className="artistas">Artista CLICKEADO tiene id {this.state.aElegido.id}</h2>
                <article className="lamona">
                    <h4>La Mona Jimenez</h4>
                    <p>Genero Cuarteto</p>
                    <img src='' alt="" />
                    <br />
                    <i className="fa-brands fa-youtube"></i>
                </article>
                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
            </>
        )
    }
}
export default DetalleArtista;