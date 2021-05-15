const ADD_NEW_MASSAGE_DIALOG = 'ADD_NEW_MASSAGE_DIALOG';
const NEW_TEXT_BODY_DIALOG = 'NEW_TEXT_BODY_DIALOG';

export const addNewMassageDialogActionCreator = (text) => ({ type: 'ADD_NEW_MASSAGE_DIALOG', text:text });
export const newTextBodyDialogActionCreator = (body) => ({ type: 'NEW_TEXT_BODY_DIALOG', body:body });

const dialogReducer = (state, action) => {

    switch(action.type) {
        case NEW_TEXT_BODY_DIALOG :
            state.newTextBodyDialog = action.body;
            return state;
        case ADD_NEW_MASSAGE_DIALOG :
            let newMassageDialog = {
                id:7,
                massage: state.newTextBodyDialog
            };
            state.dataMessage.push(newMassageDialog);
            state.newTextBodyDialog = '';
            return state;
        default:
            return state;
    }

    return state;
}

export default dialogReducer;