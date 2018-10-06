import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './Header'
import Usuarios from './Usuarios';
import UsuariosAgregar from './Usuarios/Agregar'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        	<div>
        		<Header/>
        		<br/>
        		<div className="container">
               <Route exact path='/' component={Usuarios}/>
               <Route exact path='/u_agregar' component = {UsuariosAgregar}/>
        		</div>
        	</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
