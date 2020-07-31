import React from 'react';
import Logo from '../../assets/img/logo-primataz.png';
import './menu.css';
//import ButtonLink from '../components/ButtonLink';
import Button from '../Button/index';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Primataz logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;