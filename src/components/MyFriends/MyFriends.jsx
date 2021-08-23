import React from 'react';
import s from './MyFriends.module.css'
import Friend from "./Friend/Friend";


const MyFriends = (props) => {

   const friend = props.friends;
    return (
        <div className={s.grid}>

            {friend.friendsPage.friends.map((el)=> {return <Friend name={el.name} image={el.image}/>})}

        </div>
    );
};

export default MyFriends;