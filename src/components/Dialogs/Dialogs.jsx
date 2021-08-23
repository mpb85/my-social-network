import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let newMessageBody = state.newMessageBody;

    let onNewTextBody = (e) => {
        let text = e.target.value;
        props.newTextBody(text);
    };

    let onAddUserMessage = () => {
        props.addUserMassege();
        props.addUser();
    };

    return (
        <div className={`${s.dialogs} ${s.grid}`}>
            <div className=''>
                {dialogsElements}
            </div>
            <div className=''>
                {messagesElements}
                <div><textarea placeholder='Enter your message' value={newMessageBody}
                               onChange={onNewTextBody}></textarea></div>
                <div>
                    <button onClick={onAddUserMessage}>Добавить новое сообщение></button>
                </div>
            </div>

        </div>
    )
};


export default Dialogs;