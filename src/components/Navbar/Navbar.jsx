import React from 'react';
import s from './Navbar.module.css'
import NavLink from "react-router-dom/es/NavLink";

const Navbar = () => {
    return (
        <nav className={`${s.nav} ${s.a}`}>
            <div className = {s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/dialogs'>Masseges</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='music'>Music</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;