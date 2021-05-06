import React from 'react';
import s from './Navbar.module.css'
import NavLink from "react-router-dom/es/NavLink";
import MyFriends from "../MyFriends/MyFriends";

const Navbar = (props) => {
    return (
        <nav className={`${s.nav} ${s.a}`}>
            <div className = {s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className ={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.active}>Masseges</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/dailyrountine' activeClassName={s.active}>Daily Routine</NavLink>
            </div>
            <div className={s.myFriends}>
            <MyFriends friends={props.friends}/>
            </div>
        </nav>

    );
};

export default Navbar;

