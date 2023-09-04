import React from "react";
import "./headerStyles.css"

function Header(){
    return(
        //header html
        <nav>
            <a href="index.html" class="title"><h1>Renée Music</h1></a>
            <div>
                <form action="./detalles-busqueda.html" method="get">
                <input name="buscarr" type="search" placeholder="Buscar" class="buscar"/>
                <button type="submit" id="btn" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button></form>
            </div>
            <div class="seccionesdiv">
                <a href="./index.html" class="secciones">Home</a>
                <a href="./playlist.html" class="secciones" >Playlist</a>
                <a href="./generos.html" class="secciones">Generos</a>
            </div>
        </nav>
    );
}
export default Header;