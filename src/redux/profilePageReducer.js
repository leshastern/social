 let initialState = {
      userID : {id: "1", firstName: "Ivan", lastName: "Ivanov", ava: "http://s1.iconbird.com/ico/2013/8/429/w512h5121377939745185082manpeoplestreamlineuser.png", status: "26 лет, опытный ничего не делатель"},
      postData: [
          {id: "1", message: "hi! how are you", countLikes :"5", ava: "http://s1.iconbird.com/ico/2013/8/429/w512h5121377939745185082manpeoplestreamlineuser.png"},
          {id: "2", message: "It's my first post", countLikes : "2", ava: "http://s1.iconbird.com/ico/2013/8/429/w512h5121377939745185082manpeoplestreamlineuser.png"},
          {id: "3", message: "3", countLikes : "22", ava: "http://s1.iconbird.com/ico/2013/8/429/w512h5121377939745185082manpeoplestreamlineuser.png"},
         ],
      newPostText: ""
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