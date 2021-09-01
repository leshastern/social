import React from 'react'
import classes from  './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message'
import { addMsgActionCreater, changeMSGActionCreater } from '../../redux/messagePageReducer'




const Dialogs = (props) => {

    let newMsg = React.createRef();
    let addMsg = () =>
    {
        props.addMsg();
    }
    let onMsgChange = () => {
        let body = newMsg.current.value;
        props.onMsgChange(body);
    }

    let users = props.messagePage.dialogsData.map (user => <Dialog name={user.name} id = {user.id} key = {user.id} ava = {user.ava}/>)
    let messages = props.messagePage.messageData.map (msg => <Message message={msg.message}  id = {msg.id} cl = {msg.type}/>)
    return (
        <div> 
            <div className = {classes.Dialogs}>
            
              <div className = {classes.Dialog}> 
                {users}
                 </div>  
            <div className = {classes.Messages}>
                <div className = {classes.messages_name}>
                    <span>Katya</span>

                </div>
                {messages}
                <div>
                <textarea onChange = {onMsgChange} value = {props.messagePage.currentMsg} ref = {newMsg}></textarea>
                <div><button  onClick = { addMsg }>Отправить</button></div>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default Dialogs