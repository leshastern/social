import React from 'react'
import classes from  './Dialogs.module.css'
import { addMsgActionCreater, changeMSGActionCreater } from '../../redux/messagePageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapDispatchToProps = (dispatch) => {
    return {
    addMsg: () => {
        let sndr = Math.random() < 0.5 ? "sender":"receiver";
        dispatch(addMsgActionCreater(sndr));
    },
    onMsgChange: (body) => {
        let action = changeMSGActionCreater(body);
        dispatch(action);
    }
  }
}

let mapStateToProps = (state) => {
    return {
    messagePage: state.messagePage
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer