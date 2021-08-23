import React from 'react';
import {
    addNewMassageDialogActionCreator,
    addNewUserActionCreator,
    newTextBodyDialogActionCreator
} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage
}};
let mapDispatchToProps = (dispatch)=>{
    return {
        addUserMassege: () => {
            let action = addNewMassageDialogActionCreator();
            dispatch(action);
        },
        addUser: () => {
            let action = addNewUserActionCreator();
            dispatch(action);
        },
        newTextBody: (body) => {
            dispatch(newTextBodyDialogActionCreator(body));
        }

    }};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;