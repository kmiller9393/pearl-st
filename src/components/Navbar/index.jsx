import React from 'react';
import logo from '../../images/pearl-st-surfboards.jpeg'

import { StyledImage, StyledNavbar, StyledToolbar } from './styles';

const Navbar = () => {

return (
        <StyledNavbar>
            <StyledToolbar><StyledImage src={logo} /></StyledToolbar>
        </StyledNavbar>
     )
}

export default Navbar;