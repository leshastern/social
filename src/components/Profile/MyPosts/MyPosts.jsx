import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {
    
    let postElement = props.postData.map (post => 
      <Post message={post.message} count = {post.countLikes} ava = {post.ava} />
    )
    let post = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let body = post.current.value;
        props.onPostChange(body);

    }
    return (
       <div className = {classes.posts}>
         <div className = {classes.posts_title}>
         <h3>Мои посты</h3>
         </div>
         
         <textarea onChange = {onPostChange} value = {props.newPostText} ref = {post}></textarea>
         <div><button onClick = {onAddPost} >Отправить</button></div>
         <div className = {classes.posts_listposts}>
            Новые посты
            {postElement}
         </div>
            
       </div>
    )
}

export default MyPosts