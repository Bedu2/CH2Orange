import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as dependientesActions from '../../actions/dependientesActions';
import {Button, Modal, Table} from "react-materialize";

class Dependientes extends Component {

    componentDidMount() {
        this.props.consultarUsuario(this.props.match.params.id);
        this.props.traerDependientes(this.props.match.params.id);
    }

    desplegarEncabezado = () => (
        <div>
        <h4>
            {this.props.usuario_consultar.nombre}
            &nbsp;
            {this.props.usuario_consultar.apellidos.paterno}
            &nbsp;
            {this.props.usuario_consultar.apellidos.materno}
        </h4>
        <h5>
            Añadir un Dependiente 
            &nbsp;
            <Link to='/d_agregar'>
                <Button floating className='blue darken-3' waves='light' icon='add'/>
            </Link>
        </h5>
        </div>
    )

    desplegarDependientes = () =>
        this.props.dependientes.map((element) =>
            (
                <tr key={element._usuario}>
                    <td>{element.nombre_completo}</td>
                    <td>{element.dependencia}</td>
                    <td>{element.edad}</td>
                    <td className='alignIcons'>
                        <Link to={`/d_editar/${element._usuario}`}>
                            <Button  small className='blue accent-1' waves='light' icon='edit'/>
                        </Link>
                        <Modal
                            header='Eliminar Dependiente'
                            actions={
                                <span>
                                    <Button small className='blue accent-1 modal-close' waves='light' icon='close' title ='No borrar'/>
                                    <Button small className='blue accent-1 modal-close' waves='light' icon='check_circle' title ='Si Borrar'/>
                                </span>
                            }
                            trigger={
                                <Button  small className='blue accent-1' waves='light' icon='delete_outline'/>}>
                            <p> Esta seguro que desea eliminar el dependiente?</p>
                        </Modal>
                    </td>
                </tr>
            ));

    render() {
        return (
            <div>
                <h3 className="valign-wrapper">
                    {this.desplegarEncabezado()}
                </h3>
                <Table>
                    <thead>
                    <tr>
                        <th data-field="name">Nombre Completo</th>
                        <th data-field="name">Dependencia</th>
                        <th data-field="edad">Edad</th>
                        <th data-field="actions" className='alignIcons' colSpan={3}>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.desplegarDependientes()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = ({dependientesReducer}) =>
{
    return dependientesReducer
};

export default connect(mapStateToProps, dependientesActions)(Dependientes)