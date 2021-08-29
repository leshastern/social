
let initialState = {
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