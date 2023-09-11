import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Index from './components/Index/Index'
import Detalle from './screens/Detalle/Detalle'
import NotFound from './screens/NotFound/NotFound'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Index} />
        <Route path='/detalle/artista/:id' component={Detalle} />
        <Route path='/detalle/album/:id' component={Detalle}/>
        <Route path='/detalle/cancion/:id' component={Detalle}/>
        <Route path='' component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
