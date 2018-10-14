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
                        <Button
                            className='blue accent-1 modal-close col s6 m4 offset-m2 ' waves='light'
                            onClick={this.enviar}
                            disabled={this.props.cargando}
                        >
                            Guardar
                        </Button>
                        <Button
                            className='deep-orange darken-3 modal-close col s6 m4 ' waves='light'
                            node='a'
                            href='/'
                        >
                            Regresar
                        </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ usuariosReducer }) => {
    return usuariosReducer;
};
export default connect(mapStateToProps, usuariosActions)(UsuariosEditar);