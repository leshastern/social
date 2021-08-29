 let initialState = {
      postData: [
          {id: "1", message: "hi! how are you", countLikes :"5"},
          {id: "2", message: "It's my first post", countLikes : "2"},
          {id: "3", message: "3", countLikes : "22"},
         ],
      newPostText: "input text here"
  };
  
let profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD-POST" : {
            let newPost = {id: "4", message: state.newPostText, countLikes: "3"}
            state.postData.push(newPost);
            return state;
        }
        case "CHANGE-POST-TEXT" : {
            state.newPostText = action.post;
            return state;
          }
        default: return state;
    }
}

export default profilePageReducer

export const addPostActionCreator = () => {
  return {type: "ADD-POST"}
}

export const changePostTextActionCreater = (currentPost) => {
  return {type: "CHANGE-POST-TEXT", post: currentPost}
}