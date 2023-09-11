import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './screens/Home/Home'
import ScreenAlbum from './screens/Detalle/ScreenAlbum'
import ScreenArtista from './screens/Detalle/ScreenArtista'
import ScreenCancion from './screens/Detalle/ScreenCancion'
import NotFound from './screens/NotFound/NotFound'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/detalle/artista/:id' component={ScreenArtista} />
        <Route path='/detalle/album/:id' component={ScreenAlbum}/>
        <Route path='/detalle/cancion/:id' component={ScreenCancion}/>
        <Route path='' component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
