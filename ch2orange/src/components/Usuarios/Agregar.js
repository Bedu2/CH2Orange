import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
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
            nombre,
            apellidos: {
                paterno,
                materno
            },
            edad
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
                        <Button
                            className='blue accent-1 modal-close col s6 m4 offset-m2 ' waves='light'
                            onClick={this.enviar}
                            disabled={this.props.cargando}
                        >
                            Guardar
                        </Button>
                        <Link to={`/`}>
                            <Button
                                className='deep-orange darken-3 modal-close col s6 m4 ' waves='light'
                            >
                                Regresar
                            </Button>
                        </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ usuariosReducer }) => {
    return usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(UsuariosAgregar);