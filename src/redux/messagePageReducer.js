

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
     
let messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MSG": {
            let newmsg = {message: state.currentMsg , type: action.sender }
            state.messageData.push(newmsg);
            return state;
        }
        case "CHANGE-MSG" : { 
            state.currentMsg = action.msg;
            return state;
        }
        default: return state;
    }
}
export default messagePageReducer

export const addMsgActionCreater = (sndr) => {
    return {type: "ADD-MSG", sender: sndr}
  }
export const changeMSGActionCreater = (message) => {
    return {type:'CHANGE-MSG', msg: message}
  } 