import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table, Icon, Button} from 'react-materialize'


class Usuarios extends Component {

	componentDidMount() {
		this.props.traerUsuarios
	}

desplegarUsuarios = () => (
	<tr>
	  <td>Nombre</td>
	  <td>Apellido Paterno</td>
	  <td>Apellido Materno</td>
	  <td>Edad</td>
		<td>
      <Button  small className='orange' waves='light' icon='visibility'/>
      &nbsp;
      <Button  small className='orange' waves='light' icon='edit'/>
      &nbsp;
      <Button  small className='orange' waves='light' icon='delete_outline'/>
		</td>
	</tr>
	)

	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Usuarios
					&nbsp;
					<Link to='/usuarios/agregar'>
						<Button floating large className='blue' waves='light' icon='add'/>
					</Link>
				</h3>
					<Table>
					  <thead>
					    <tr>
					      <th data-field="name">Name</th>
					      <th data-field="apPaterno">Apellido Paterno</th>
					      <th data-field="apMaterno">Apellido Materno</th>
					      <th data-field="age">Edad</th>
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

export default Usuarios