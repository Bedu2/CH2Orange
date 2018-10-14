import React, {Component} from 'react';
import  { connect } from 'react-redux';
import {Button, Input} from 'react-materialize';
import * as dependientesActions from '../../actions/dependientesActions'
import {
    EDITAR_NOMBRE_COMPLETO,
    EDITAR_DEPENDENCIA,
    EDITAR_EDAD_DEP
} from '../../types/dependientesTypes'

class DependientesEditar extends Component {

    componentDidMount() {
        this.props.llamarDependiente(this.props.match.params.id);
    }

    handleChange = (event, propiedad) => {
        this.props.cambiarDependiente(
            propiedad, event.target.value
        );
    };

    enviar = async () => {
        let id = this.props.match.params.id;
      const {
              nombre_completo,
              dependencia,
              edad
      } = this.props.dependiente_editar;

      const valores = {
          nombre_completo,
          dependencia,
          edad
      };
      this.props.enviarDepEditado(id, this.props.dependiente_editar, valores, this.props.dependientes)

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
                        placeholder = " "
                        value={this.props.dependiente_editar.nombre_completo}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_NOMBRE_COMPLETO)
                        }
                        name="nombre_completo"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Dependencia"
                        type='text'
                        placeholder = " "
                        value={this.props.dependiente_editar.dependencia}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_DEPENDENCIA)
                        }
                        name="dependencia"
                    />
                    <Input
                        s={12}
                        m={6}
                        label="Edad"
                        type='text'
                        placeholder = " "
                        value={this.props.dependiente_editar.edad}
                        onChange={
                            (event) => this.handleChange(event, EDITAR_EDAD_DEP)
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
                            href={`/d_usuario/${this.props.usuario_consultar._id}`}
                        >
                            Regresar
                        </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dependientesReducer}) => {
  return dependientesReducer;

};
export default connect(mapStateToProps, dependientesActions)(DependientesEditar);