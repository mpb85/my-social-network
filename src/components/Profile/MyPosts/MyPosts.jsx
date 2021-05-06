import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


    let newPostElement = React.createRef();
    let addPost = () => {
        props.setAddNewPosts();
    };

    let newAddWorld = () => {
        let text = newPostElement.current.value;

        props.setUpdateNewPostText(text);
    }
    let posts = props.state.profilePage;

    return (
        <div>
            <div>
            <textarea ref={newPostElement} onChange={newAddWorld}></textarea>
                <div><button onClick={ addPost }>Создать новый пост </button></div>
            </div>
            {posts.posts.map((el)=> {return <Post post={el.post} id={el.id}/>})}
        </div>
    );
};

export default MyPosts;