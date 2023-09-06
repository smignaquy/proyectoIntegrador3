import React, { Component } from "react";

class Footer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className='divFooter'>
                <div className="footer">
                    <a href="index.html"><p className="nombre">Renée Music</p></a>
                    <a href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="twitter.com"><i className="fa-brands fa-twitter"></i></a>
                    <a href="facebook.com"><i className="fa-brands fa-facebook-square"></i></a>
                </div>
                <div className="integrantes">
                    <p><strong>Integrantes : Remondino Bautista - Santiago Mignaquy - Malena Laborda Moreno</strong></p>
                </div>
            </div>
        )
    };
}

export default Footer;