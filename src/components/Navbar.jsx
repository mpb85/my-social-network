import React from 'react';
import s from './../Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${s.nav} ${s.a}`}>
            <div className = {s.item}>
                <a href='#'>Profile</a>
            </div>
            <div className = ' item '>
                <a href='#'>Masseges</a>
            </div>
            <div className = ' item '>
                <a href='#'>News</a>
            </div>
            <div className = ' item '>
                <a href='#'>Music</a>
            </div>
        </nav>
    );
};

export default Navbar;