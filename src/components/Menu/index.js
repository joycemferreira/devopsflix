import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() { // Menu component -- needs to start in capital letter
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DevopsFlix Logo"/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo video
            </Button>
        </nav>
    );

}

export default Menu;