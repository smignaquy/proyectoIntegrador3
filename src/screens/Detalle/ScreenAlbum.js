import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class ScreenAlbum extends Component{
    constructor(props){
        super(props); 
        const id = this.props.match.params.id
        this.state = {
            dataAlbum: [],
            id : id
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataAlbum: data,
            })
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })

    }

    render(){
        return(
            <>
                <h2 class="artistas">Album CLICKEADO {this.state.dataAlbum.id}</h2>
                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
                <article className="lamona">
                    <h4>{this.state.dataAlbum.title}</h4>
                    <img src='' alt="" />
                    <br />
                    <i className="fa-brands fa-youtube"></i>
                </article>
                <section>
                    {/* <article class="disc">
                    <h4>{this.state.dataAlbum.title} </h4>
                    <h4> {this.state.dataAlbum.artist.name} </h4>
                    <h4> {this.state.dataAlbum.album.title} </h4> */}
                    {/* </article> */}
                    <main class="cantante">
                    </main>
                </section>
            </>
        )
    }
}
export default ScreenAlbum; 