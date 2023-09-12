import React, { Component } from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import DetalleArtista from "../../components/Detalle/DetalleArtista";

function ScreenArtista() {
  //let id = props.params.match.id
    return (
      <>
        <DetalleArtista />
      </>
    );
  }
  
export default ScreenArtista;