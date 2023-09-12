import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Favoritos from "../../components/Favoritos/Favoritos";
import Playlist from '../../components/Playlist/Playlist'

function ScreenFavoritos() {
    return (
      <>
        <Playlist />
      </>
    );
  }
  
export default ScreenFavoritos;