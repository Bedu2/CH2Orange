import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table, Icon, Button} from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

	componentDidMount() {
		this.props.traerUsuarios
	}

	desplegarUsuarios = () => 
		{
			this.props.usuarios.map((element) => 
				(
					<tr key={ element.id }>
					  <td>{element.nombre }</td>
					  <td>{element.apellidos.paterno}</td>
					  <td>{element.apellidos.paterno}</td>
					  <td>{element.edad}</td>
						<td>
				      <Link to='/u_dependientes/usuario_id'>
				      	<Button  small className='red' waves='light' icon='visibility'/>
				      </Link>
				      &nbsp;
				      <Link to='/u_editar/usuario_id'>
				      	<Button  small className='red' waves='light' icon='edit'/>
				      </Link>
				      &nbsp;
				      <Button  small className='red' waves='light' icon='delete_outline'/>
						</td>
					</tr>
				)) 
		}

	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Usuarios
					&nbsp;
					<Link to='/u_agregar'>
						<Button floating large className='blue' waves='light' icon='add'/>
					</Link>
				</h3>
					<Table>
					  <thead>
					    <tr>
					      <th data-field="name">Name</th>
					      <th data-field="apellidoPaterno">Apellido Paterno</th>
					      <th data-field="apellidoMaterno">Apellido Materno</th>
					      <th data-field="edad">Edad</th>
					      <th data-field="actions">ACTIONS</th>
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
}

export default connect(mapStateToProps, usuariosActions)(Usuarios)
