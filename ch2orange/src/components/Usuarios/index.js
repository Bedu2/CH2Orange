import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table,  Button, Modal} from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';

import '../../index.css';

class Usuarios extends Component {

componentDidMount() {
    this.props.traerUsuarios();
}

    desplegarUsuarios = () =>
        this.props.usuarios.map((element) =>
            (
                <tr key={element._id}>
                    <td>{element.nombre}</td>
                    <td>{element.apellidos.paterno}</td>
                    <td>{element.apellidos.materno}</td>
                    <td>{element.edad}</td>
                    <td className='alignIcons'>
                        <Link to='/u_dependientes/usuario_id'>
                            <Button  small className='blue accent-1' waves='light' icon='visibility'/>
                        </Link>
                        <Link to={`/u_editar/${element._id}`}>
                            <Button  small className='blue accent-1' waves='light' icon='edit'/>
                        </Link>
                        <Modal
                            header='Eliminar Usuario'
                            actions={
                                <span>
                                    <Button small className='blue accent-1 modal-close' waves='light' icon='close' title ='No borrar'/>
                                    <Button small className='blue accent-1 modal-close' waves='light' icon='check_circle' title ='Si Borrar'
                                            onClick={()=> {this.props.borrarUsuario(element._id)}}/>
                                </span>
                            }
                            trigger={
                                <Button  small className='blue accent-1' waves='light' icon='delete_outline'/>}>
                            <p> Esta seguro que desea eliminar el usuario?</p>
                        </Modal>
                    </td>
                </tr>
            ));
    render() {
        return (
            <div>
                <h3 className="valign-wrapper">
                    Usuarios
                    &nbsp;
                    <Link to='/u_agregar'>
                        <Button floating large className='blue accent-1' waves='light' icon='add'/>
                    </Link>
                </h3>
                <Table>
                    <thead>
                    <tr>
                        <th data-field="name" >Name</th>
                        <th data-field="apellidoPaterno">Apellido Paterno</th>
                        <th data-field="apellidoMaterno">Apellido Materno</th>
                        <th data-field="edad">Edad</th>
                        <th data-field="actions" className='alignIcons' colSpan={3}>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.desplegarUsuarios()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = ({usuariosReducer}) =>
{
    return usuariosReducer
};

export default connect(mapStateToProps, usuariosActions)(Usuarios)
