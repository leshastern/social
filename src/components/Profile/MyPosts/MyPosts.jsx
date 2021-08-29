import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

import { addPostActionCreator,changePostTextActionCreater } from '../../../redux/store'



const MyPosts = (props) => {
  
    let postElement = props.postData.map (post => 
      <Post message={post.message} count = {post.countLikes} />
    )
    let post = React.createRef();

    let onAddPost = () => {
      
      let action = addPostActionCreator();
      props.dispatch(action);
      let actionNew = changePostTextActionCreater("");
      props.dispatch(actionNew);
    }

    let onPostChange = () => {
        let body = post.current.value;
        let action = changePostTextActionCreater(body);
        props.dispatch(action);

    }
    return (
       <div>
         <h3>My Posts</h3>
         <textarea onChange = {onPostChange} value = {props.newPostText} ref = {post}></textarea>
         <div><button onClick = {onAddPost} >Добавить</button></div>
         <div>
           New Posts
         </div>
            {postElement}
       </div>
    )
}

export default MyPosts