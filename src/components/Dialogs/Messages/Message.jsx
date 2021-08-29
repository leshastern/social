
import classes from "./Message.module.css"


const Message = (props) => {
    return (
        <div className={props.cl == "receiver"? classes.item_receiver : classes.item_sender}> {props.message} </div>
    )
}

export default Message