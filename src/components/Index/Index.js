import React, { Component } from "react";

class Index extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(function(response){
        return response.json();
        })
        .then(function(data){
        console.log(data);
        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })
    }

    render(){
        return(
            <section>
                <h2 class="h2artistas">TOP 5 Artistas</h2>
                <main class="cantantes">
            
                </main>
                <h2 class="h2albumes">TOP 5 Albumes</h2>
                <main class="albumesfotos">
                    
                </main>
                <h2 class="h2canc">TOP 5 Canciones</h2>
                <main class="cancionesindex">
                </main>
            </section>
        )
    }
}

export default Index