import React from 'react';
import s from './User.module.css'
import logo from './../../assets/images/logo.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {

    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    createPages(pages, countPage, props.currentPage);

    function createPages(pages, countPages, currentPage) {
        if (countPages > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i == countPages) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i == countPages) break
                }
            }
        } else {
            for (let i = 1; i <= countPages; i++) {
                pages.push(i)
            }
        }
    }

    return         <>
    <div>
        {
            props.users.map(u =>
                <div className={s.userInfo} key={u.id}>
                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + u.id} target='_blank'>
                        <img src={u.photos.small ? u.photos.small: logo} alt='нет фото с сервера'/>
                        </NavLink>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }} className={`${s.button} ${s.unFolowButton}`}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }} className={`${s.button} ${s.folowButton}`}>Unfollow</button>}
                    </div>
                    <div className={s.user}>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{'Ukraine'}</span>
                        <span>{'Kharkov'}</span>
                    </div>
                </div>
            )}
        <div className={s.pages}>
            {pages.map(p => {
                    return <span onClick={(e) => props.getNewUsers(p)}
                                 className={props.currentPage == p && s.currentPage || s.page}>{p}</span>
                }
            )}
        </div>
        <div>
            <button className={s.moreUsers}>oppa</button>
        </div>
    </div>
            </>
}

export default User;