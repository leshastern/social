
let initialState = {
    postData: [
        {id: "1", message: "hi! how are you", countLikes :"5"},
        {id: "2", message: "It's my first post", countLikes : "2"},
        {id: "3", message: "3", countLikes : "22"},
       ],
    newPostText: "it.com"
};

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
        default : return state;
        }
    }
export default messagePageReducer
