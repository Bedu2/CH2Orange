import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = (props) =>
    (
        <div>
            <Navbar left className='indigo darken-4'>
                <Link to={`/`}>
                	<NavItem><Icon>account_circle</Icon></NavItem>
                </Link>
            </Navbar>
        </div>
    );

export default Header;