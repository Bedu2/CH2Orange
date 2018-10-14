import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Input, Button, Preloader} from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import {
    EDITAR_NOMBRE,
    EDITAR_APPATERNO,
    EDITAR_APMATERNO,
    EDITAR_EDAD
} from '../../types/usuariosTypes';


class UsuariosEditar extends Component {

    componentDidMount() {
        this.props.llamarEditado(this.props.match.params.id);
    }

    handleChange = (event, propiedad) => {
        this.props.cambiarEditado(
            propiedad, event.target.value
        );
    };

    mostrarPreloader = () => (
        <div className="center-align">
            <Preloader/>
        </div>
    );

    enviar = async () => {
        const {
            nombre,
            apellidos,
            edad
        } = this.props.usuario_editar;

        const valores = { nombre, apellidos, edad};
        this.props.enviarEditado(this.props.usuario_editar._id, valores, this.props.usuarios);
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
                        placeholder =' '
                        value={this.props.usuario_editar.nombre}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_NOMBRE)
                        }
                        name="nombre"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Apellido Paterno"
                        type='text'
                        placeholder =' '
                        value={this.props.usuario_editar.apellidos.paterno}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_APPATERNO)
                        }
                        name="appaterno"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Apellido Materno"
                        type='text'
                        placeholder =' '
                        value={this.props.usuario_editar.apellidos.materno}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_APMATERNO)
                        }
                        name="apmaterno"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Edad"
                        type='number'
                        placeholder =' '
                        value={this.props.usuario_editar.edad}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_EDAD)
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
export default connect(mapStateToProps, usuariosActions)(UsuariosEditar);