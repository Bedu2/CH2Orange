import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Icon} from 'react-materialize';

const Header = (props) => 
(
	<div>
		<Navbar left>
			<li>
				<Link to="/">
					<Icon> account_circle </Icon>
				</Link>
			</li>
			<li>
				<Link to="/api/dependientes/orange">
					<Icon> supervised_user_circle </Icon>
				</Link>
			</li>
		</Navbar>
	</div>
)

export default Header;