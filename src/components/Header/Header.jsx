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
                <div class='cabecera'>
                    <a href="index.html"><h1>Renée Music</h1></a>
                    <a href="index.html"><img src="./img/logo.jpg" alt="" class="logo"/></a>
                    <div class='div_buscar'>
                        <form action="./detalles-busqueda.html" method="get">
                        <input name="buscarr" type="search" placeholder="Buscar" class="buscar"/>
                        <button type="submit" id="btn" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button></form>
                    </div>
                </div>
                <div class="seccionesdiv">
                    <a href="./index.html" class="secciones">Home</a>
                    <a href="./playlist.html" class="secciones" >Playlist</a>
                    <a href="./generos.html" class="secciones">Generos</a>
                </div>
                <img src='./img/guitarrabanner.jpg' alt="" class="banner"/>
            </nav>
        )
    };
}

export default Header;