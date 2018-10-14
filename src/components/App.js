import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Usuarios from "./Usuarios";
import UsuariosAgregar from './Usuarios/Agregar';
import UsuariosEditar from "./Usuarios/Editar";
import Dependientes from "./Dependientes";
import DependientesAgregar from "./Dependientes/Agregar";

const App  = () =>
     (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <Route exact path='/' component={Usuarios} />
                        <Route exact path='/u_agregar' component={UsuariosAgregar} />
                        <Route exact path='/u_editar/:id' component={UsuariosEditar} />
                        <Route exact path='/d_usuario/:id' component={Dependientes} />
                        <Route exact path='/d_agregar/:id' component={DependientesAgregar} />
                        <Route exact path='/d_editar/:id' component={UsuariosEditar} />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
export default App;
