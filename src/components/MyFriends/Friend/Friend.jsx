import React from 'react';
import s from './../MyFriends.module.css'

const Friend = (props) => {
    return (
        <div >
            {props.friend}
        </div>
    );
};

export default Friend;