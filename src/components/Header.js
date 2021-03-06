import React from 'react'
import "../CSS/Header.css"

import Logo from "../assets/mlem-logo.png"

import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header() {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img 
                className="header__logo"
                src={Logo}
                alt="Logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
            
        </div>
    )
}

export default Header
