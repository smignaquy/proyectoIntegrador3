import React, { Component } from "react";

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <nav>
                <div className='cabecera'>
                    <a href="index.html"><h1>Renée Music</h1></a>
                    <a href="index.html"><img src="./img/logo.jpg" alt="" className="logo"/></a>
                    <div className='div_buscar'>
                        <form action="./detalles-busqueda.html" method="get">
                        <input name="buscarr" type="search" placeholder="Buscar" className="buscar"/>
                        <button type="submit" id="btn" className="btn"><i className="fa-solid fa-magnifying-glass"></i></button></form>
                    </div>
                </div>
                <div className="seccionesdiv">
                    <a href="./index.html" className="secciones">Home</a>
                    <a href="./playlist.html" className="secciones" >Playlist</a>
                    <a href="./generos.html" className="secciones">Generos</a>
                </div>
                <img src='./img/guitarrabanner.jpg' alt="" className="banner"/>
            </nav>
        )
    };
}

export default Header;