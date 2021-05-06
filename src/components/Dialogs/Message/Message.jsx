import React from 'react';
import s from './Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div>
            {props.message}
        </div>
    )
};

const Dialogs = (props) => {
    const data = [
        {id: 1, name: 'Роман'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Артем'},
        {id: 4, name: 'Катя'},
        {id: 5, name: 'Маша'},
        {id: 6, name: 'Яна'}
    ];

    const dataMassage = [
        {id: 1, message: 'Привет это мое первое сообщение в моей социальной сети'},
        {id: 2, message: 'Как дела братуха'},
        {id: 3, message: 'Чувак мож ну его этот карантин, го футбол'},
        {id: 4, message: 'Где ты пропал?'},
        {id: 5, message: 'Сегодня в 20:00?'},
        {id: 6, message: 'Напонимаю что в четверг вечером курс по react'}
    ]
    return (
        <div className={`${s.dialogs} ${s.grid}`}>
            <div className={s.dialogsItem}>
                {data.map(el => {return <DialogItem name={el.name} id={el.id}/>
                })}
            </div>
            <div className={s.massages}>
                {dataMassage.map(el => { return <Message massage={el.message}/>})}

            </div>
        </div>
    )
};


export default Dialogs;