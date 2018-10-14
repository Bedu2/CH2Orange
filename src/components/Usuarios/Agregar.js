import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import {
    NOMBRE,
    APELLIDOPATERNO,
    APELLIDOMATERNO,
    EDAD
} from '../../types/usuariosTypes';

class UsuariosAgregar extends Component {

    handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

    enviar = async () => {
        const {
            nombre: nombre,
            apellidos: {
                paterno: paterno,
                materno: materno
            },
            edad: edad
        } = this.props;

        const valores = { nombre, apellidos: {paterno, materno}, edad};

        this.props.enviarForma(valores, this.props.usuarios);
    };
    render() {
        return (
            <div>
                <div className="row">
                    <Input
                        s={12}
                        m={6}
                        label="Nombre"
                        type='text'
                        value={this.props.nombre}
                        onChange={
                            (event) => this.handleChange(event, NOMBRE)
                        }
                        name="nombre"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Apellido Paterno"
                        type='text'
                        value={this.props.apellidos.paterno}
                        onChange={
                            (event) => this.handleChange(event, APELLIDOPATERNO)
                        }
                        name="appaterno"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Apellido Materno"
                        type='text'
                        value={this.props.apellidos.materno}
                        onChange={
                            (event) => this.handleChange(event, APELLIDOMATERNO)
                        }
                        name="apmaterno"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Edad"
                        type='number'
                        value={this.props.edad}
                        onChange={
                            (event) => this.handleChange(event, EDAD)
                        }
                        name="edad"
                    />
                </div>
                <div className="row">
                    <div className="col s6 offset-s3 m4 offset-m4">
                        <Button
                            small className='blue accent-1 modal-close' waves='light'
                            style={{width: '100%'}}
                            waves='light'
                            onClick={this.enviar}
                        >
                            Guardar
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ usuariosReducer }) => {
    return usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(UsuariosAgregar);