const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export const addNewPostActionCreator = () => ({type: 'ADD_NEW_POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE_NEW_POST_TEXT', text: text});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});

const initialState = {
    posts: [
        {id: 1, post: 'hello man'},
        {id: 2, post: 'С профисиональным праздником'},
        {id: 3, post: 'Поздравляю с розыгрышем'},
        {id: 4, post: 'Как дела, зайди на мою страницу и лайкни мою аватарку'},
        {id: 5, post: 'Старые добрые времена'}
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.text,
            };
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, post: state.newPostText}],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
};

export default profileReducer;