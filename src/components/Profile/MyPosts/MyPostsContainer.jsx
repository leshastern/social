import React from 'react'


import { addPostActionCreator,changePostTextActionCreater } from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
      
      let action = addPostActionCreator();
      props.store.dispatch(action);
      let actionNew = changePostTextActionCreater("");
      props.store.dispatch(actionNew);
    }

    let onPostChange = (body) => {
        let action = changePostTextActionCreater(body);
        props.store.dispatch(action);

    }
    return ( <MyPosts addPost = {addPost} onPostChange = {onPostChange} postData = {state.postData} newPostText = {state.newPostText}/> )
}

export default MyPostsContainer