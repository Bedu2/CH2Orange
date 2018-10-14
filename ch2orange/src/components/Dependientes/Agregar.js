import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Input, Button } from 'react-materialize';
import * as dependientesActions from '../../actions/dependientesActions';
import {DEPENDENCIA, EDAD, NOMBRE_COMPLETO} from "../../types/dependientesTypes";

class DependientesAgregar extends Component {

    //Cambiarlo a stateless quitar los this y ponerlo const

    handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

    enviar = async () => {

        let id=  this.props.match.params.id;
        const {
            nombre_completo,
            dependencia,
            edad,
    } = this.props;

        const valores = {
            nombre_completo,
            dependencia,
            edad,
            _usuario: id
        };
       this.props.enviarFormaDep( valores, this.props.dependientes);
    };
    render() {
        return (
            <div>
                <div className="row">
                    <Input
                        s={12}
                        m={6}
                        label="Nombre Completo"
                        type='text'
                        value={this.props.nombre_completo}
                        onChange={
                            (event) => this.handleChange(event, NOMBRE_COMPLETO)
                        }
                        name="nombre_completo"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Dependencia"
                        type='text'
                        value={this.props.dependencia}
                        onChange={
                            (event) => this.handleChange(event, DEPENDENCIA)
                        }
                        name="dependencia"
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
                        name="Edad"
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
                        <Link to={`/d_usuario/${this.props.match.params.id}`}>
                            <Button className='deep-orange darken-3 modal-close col s6 m4 ' waves='light'>
                                Regresar
                            </Button>
                        </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dependientesReducer }) => {
    return dependientesReducer;
};

export default connect(mapStateToProps, dependientesActions)(DependientesAgregar);