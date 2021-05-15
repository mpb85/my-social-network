const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addNewPostActionCreator = () => ({ type: 'ADD_NEW_POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', text:text });

const profileReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.text;
            return state;
        case ADD_NEW_POST:
            let text = {
                id: 6,
                post: state.newPostText
            };
            state.posts.push(text);
            state.newPostText = '';
            return state;
        default:
            return state;
    }


};

export default profileReducer;