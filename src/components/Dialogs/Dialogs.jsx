import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addNewMassageDialogActionCreator, newTextBodyDialogActionCreator} from "../../Redux/dialogReducer";

const Dialogs = (props) => {

 let newTextBody = (e) =>{
     let text = e.target.value;
     props.dispatch(newTextBodyDialogActionCreator(text))
 }



    let addUser = () => {

        props.dispatch(addNewMassageDialogActionCreator());
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
            <textarea onChange={newTextBody}></textarea>
            <button onClick={ addUser }>Добавить новое сообщение></button>

        </div>
    )
};


export default Dialogs;