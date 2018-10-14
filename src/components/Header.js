import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = (props) =>
    (
        <div>
            <Navbar left className='indigo darken-4'>
                <NavItem href='/'><Icon>account_circle</Icon></NavItem>
                <NavItem href='/u_agregar'><Icon>supervised_user_circle</Icon></NavItem>
            </Navbar>
        </div>
    );

export default Header;