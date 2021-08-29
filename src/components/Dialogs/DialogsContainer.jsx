import React from 'react'
import classes from  './Dialogs.module.css'
import { addMsgActionCreater, changeMSGActionCreater } from '../../redux/messagePageReducer'
import Dialogs from './Dialogs'




const DialogsContainer = (props) => {
    
    let state = props.store.getState().messagePage;
    let addMsg = () =>
    {
        let sndr = Math.random() < 0.5 ? "sender":"receiver";
        props.store.dispatch(addMsgActionCreater(sndr));
    }
    let onMsgChange = (body) => {
        let action = changeMSGActionCreater(body);
        props.store.dispatch(action);
    }

    
    return ( <Dialogs addMsg = {addMsg} onMsgChange = {onMsgChange} messagePage = {state}/>  )
}

export default DialogsContainer