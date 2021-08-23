const ADD_NEW_MASSAGE_DIALOG = 'ADD_NEW_MASSAGE_DIALOG';
const NEW_TEXT_BODY_DIALOG = 'NEW_TEXT_BODY_DIALOG';
const ADD_NEW_USER = 'ADD_NEW_USER';

export const addNewMassageDialogActionCreator = () => ({type: 'ADD_NEW_MASSAGE_DIALOG'});
export const newTextBodyDialogActionCreator = (body) => ({type: 'NEW_TEXT_BODY_DIALOG', body: body});
export const addNewUserActionCreator = () => ({type: 'ADD_NEW_USER'});

const inicialState = {
    dialogs: [
        {id: 1, name: 'Роман'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Артем'},
        {id: 4, name: 'Катя'},
        {id: 5, name: 'Маша'},
        {id: 6, name: 'Яна'},
        {id: 7, name: 'Коля'},
    ],
    messages: [
        {id: 1, message: 'Привет это мое первое '},
        {id: 2, message: 'Как дела братуха'},
        {id: 3, message: 'Чувак мож ну его этот'},
        {id: 4, message: 'Где ты пропал?'},
        {id: 5, message: 'Сегодня в 20:00?'},
        {id: 6, message: 'Напонимаю что в четверг вечером курс по react'},
        {id: 7, message: 'Что за фигня и почему не работает'},
    ],
    newMassegeBody: ''
};

const dialogReducer = (state = inicialState, action) => {

    switch (action.type) {
        case NEW_TEXT_BODY_DIALOG :
            return {
                ...state,
                newMassegeBody: action.body,
            };
        case ADD_NEW_MASSAGE_DIALOG :
            let body = state.newMassegeBody;
            return {
                ...state,
                messages: [...state.messages, { id: 8, message: body}],
                newMassegeBody: ' ',
            };
        case ADD_NEW_USER :
            let user = {
                id: 8,
                name: 'Алена'
            };
            state.dialogs.push(user);
        default:
            return state;
    }
};

export default dialogReducer;