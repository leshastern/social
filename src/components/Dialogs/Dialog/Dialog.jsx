import { NavLink } from "react-router-dom";
import classes from "./Dialog.module.css"


const Dialog = (props) => {
    let path = "/dialogs/"+ props.id;
    return <div className = {classes.item}>
        <div className = {classes.ava}>
            <img src = {props.ava} className = {classes.ava}></img>
        </div>
        <div className = {classes.info}>
        <NavLink to = {path} >{props.name}</NavLink></div>
    </div> 
}

export default Dialog