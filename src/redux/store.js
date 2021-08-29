import { renderApp } from "..";
import  messagePageReducer  from "./messagePageReducer";
import profilePageReducer  from "./profilePageReducer";

let store = {
  _state : {
    profilePage: {
      postData: [
          {id: "1", message: "hi! how are you", countLikes :"5"},
          {id: "2", message: "It's my first post", countLikes : "2"},
          {id: "3", message: "3", countLikes : "22"},
         ],
      newPostText: "it.com"
      },
    messagePage: {
      dialogsData: [
        {name: "Katya", id: "1", ava: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ava_Addams_AVN_Expo_2015_2.jpg/704px-Ava_Addams_AVN_Expo_2015_2.jpg"},
        {name: "Dima", id: "2", ava: "https://m.media-amazon.com/images/M/MV5BMWM2NmU3OGMtMTE1ZS00MTVjLWJhYmYtNDZlM2Y0OThhN2IxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_UX477_CR0,0,477,268_AL_.jpg"},
      ],
      messageData: [
        {message: "Hi!", type: "sender"},
        {message: "How old are you?", type: "receiver"}
         ],
      currentMsg: "sample text"
       } 
  },
  getState () {
    return this._state;
  },
  _renderPage () {
    console.log("ss");
  },
  subscribe(observer) {
    this._renderPage = observer;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagePage = messagePageReducer(this._state.messagePage, action);
    this._renderPage();
  }
}





export default store;

  
