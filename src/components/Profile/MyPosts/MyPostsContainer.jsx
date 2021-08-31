import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator,changePostTextActionCreater } from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts'




let mapDispatchToProps = (dispatch) => {
  return {
  addPost: () => {
        let action = addPostActionCreator();
        dispatch(action);
        let actionNew = changePostTextActionCreater("");
        dispatch(actionNew);
  },
  onPostChange: (body) => {
      let action = changePostTextActionCreater(body);
      dispatch(action);
  }
 }
}

let mapStateToProps = (state) => {
  return {
  postData: state.profilePage.postData,
  newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);




export default MyPostsContainer