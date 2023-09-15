import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class searchResults extends Component{
    constructor(props){
        super(props); 
        this.state = {
            busqueda : new URLSearchParams(this.props.location.search).get("buscar"),
            results : []
        }
    }

    render(){
        return(
            <>
                <h3 className="search">Resultado de la busqueda: {this.state.busqueda}</h3>
                <p className="aver">
                    No hay resultados para tu criterio de busqueda
                </p>
            </>
        )
    }



}

export default searchResults