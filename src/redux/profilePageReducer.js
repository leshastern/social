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
            let newState = {
              ...state,
              postData: [...state.postData, {id: "4", message: state.newPostText, countLikes: "3"}]
            };
            return newState;
        }
        case "CHANGE-POST-TEXT" : {
            let newState = {
              ...state,
              newPostText: action.post
            };
            return newState;
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