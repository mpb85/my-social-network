import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {


    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onNewAddWorld = () => {
        let text = newPostElement.current.value;

        props.newAddWorld(text);
    };
    let posts = props.posts;

    return (
        <div>
            <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onNewAddWorld}></textarea>
                <div><button onClick={ onAddPost }>Создать новый пост </button></div>
            </div>
            {posts.posts.map((el)=> {return <Post post={el.post} id={el.id}/>})}
        </div>
    );
};

export default MyPosts;