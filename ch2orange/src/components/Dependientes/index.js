import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as dependientesActions from '../../actions/dependientesActions';
import {Button, Modal, Table, Card} from "react-materialize";

class Dependientes extends Component {

    componentDidMount() {
        this.props.consultarUsuario(this.props.match.params.id);
        this.props.traerDependientes(this.props.match.params.id);
    }

    desplegarEncabezado = () => (
        <div>
            <Card className='indigo darken-4' textClassName='white-text'>
                {this.props.usuario_consultar.nombre}
                &nbsp;
                {this.props.usuario_consultar.apellidos.paterno}
                &nbsp;
                {this.props.usuario_consultar.apellidos.materno}
                &nbsp;
                <Link to={`/d_agregar/${this.props.usuario_consultar._id}`}>
                    <Button large floating className='blue darken-3' waves='light' icon='add' title='Agregar Dependiente'/>
                </Link>
            </Card>
        </div>
    );

    desplegarDependientes = () =>
        this.props.dependientes.map((element) =>
            (
                <tr key={element._id}>
                    <td>{element.nombre_completo}</td>
                    <td>{element.dependencia}</td>
                    <td>{element.edad}</td>
                  <td className='alignIcons'>
                        <Link to={`/d_editar/${element._id}`}>
                            <Button  className='blue accent-1' waves='light' icon='edit'/>

                        </Link>
                        <Modal
                            header='Eliminar Dependiente'
                            actions={
                                <span>
                                    <Button className='blue accent-1 modal-close' waves='light' icon='close' title ='No borrar'/>
                                    <Button className='blue accent-1 modal-close' waves='light' icon='check_circle' title ='Si Borrar'
                                    onClick={()=> {this.props.borrarDependiente(element._id)}}/>
                                </span>
                            }
                            trigger={
                                <Button  className='blue accent-1' waves='light' icon='delete_outline'/>}>
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
                <h5>Lista de dependientes</h5>
                <Table>
                    <thead>
                    <tr>
                        <th data-field="name">Nombre Completo</th>
                        <th data-field="name">Dependencia</th>
                        <th data-field="edad">Edad</th>
                        <th data-field="actions" className='alignIcons' colSpan={3}>ACCIONES</th>
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