import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";




const Dialogs = (props) => {



    let addNameUser = React.createRef();

    let addUser = () => {

        let text = addNameUser.current.value;

        props.setAddUser(text);
           };
   let massegePage = props.state.massegePage;


    return (
        <div className={`${s.dialogs} ${s.grid}`}>
            <div className={s.dialogsItem}>
                {massegePage.data.map(el => {return <DialogItem name={el.name} id={el.id}/>
                })}
            </div>
            <div className={s.massages}>
                {massegePage.dataMessage.map(el => { return <Message message={el.message}/>})}
            </div>
            <textarea ref={addNameUser} ></textarea>
            <button onClick={ addUser }>Добавить новое сообщение></button>

        </div>
    )
};


export default Dialogs;