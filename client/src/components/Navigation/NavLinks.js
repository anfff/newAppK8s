import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

const NavLinks = (props) => {
    return(
        <ul className="nav-links">
            <NavLink to="/" exact>CALCULATE FIBONACCI</NavLink>
            <NavLink to="/authors">AUTHORS</NavLink>
        </ul>
    )
}

export default NavLinks