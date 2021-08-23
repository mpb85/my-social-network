import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
})

let store = createStore(redusers);

window.store = store;

export default store;