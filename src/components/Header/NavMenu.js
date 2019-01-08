import React from 'react';
import { Link } from "react-router-dom";

const NavMenu = props => {
    return (
            <nav className='navMenu'>
               <ul>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}>Inicio</Link>
                </li>
            <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
            </li>
            <li>
            <Link to={`${process.env.PUBLIC_URL}/portafolio`}>Portafolio</Link>
            </li>
        </ul>
            </nav>
    );
};



export default NavMenu;
