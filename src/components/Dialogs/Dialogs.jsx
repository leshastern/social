import React from 'react'
import classes from  './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message'
import { addMsgActionCreater, changeMSGActionCreater } from '../../redux/store'




const Dialogs = (props) => {
    
    let newMsg = React.createRef();
    let addMsg = () =>
    {
        let sndr = Math.random() < 0.5 ? "sender":"receiver";
        props.dispatch(addMsgActionCreater(sndr));
    }
    let onMsgChange = () => {
        let body = newMsg.current.value
        let action = changeMSGActionCreater(body);
        props.dispatch(action);
    }

    let users = props.messagePage.dialogsData.map (user => <Dialog name={user.name} id = {user.id} ava = {user.ava}/>)
    let messages = props.messagePage.messageData.map (msg => <Message message={msg.message} cl = {msg.type}/>)
    return (
        <div> 
            <div className = {classes.Dialogs}>
            
              <div className = {classes.Dialog}> 
                {users}
                 </div>  
            <div className = {classes.Messages}>
                
                {messages}
            </div>
            <div>
                <textarea onChange = {onMsgChange} value = {props.messagePage.currentMsg} ref = {newMsg}></textarea>
                <button  onClick = { addMsg }>Добавить</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs