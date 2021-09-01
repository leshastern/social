
import classes from "./MyProfile.module.css"

const MyProfile = (props) => {
    return (
        <div>
        <div className = {classes.coverage}>
          <img src = "http://psdcollection.ru/wp-content/uploads/2019/11/oblozhka75-1024x258.jpg" />
        </div>
       <div className = {classes.profile_info}>
          <div className = {classes.profile_ava}>
            <img src = {props.userID.ava} />
          </div>
          <div className = {classes.profile_about_user}>
            <div>
            <span> <b>{props.userID.firstName} {props.userID.lastName} </b></span>
            </div>
            <div className = {classes.profile_status}>
            <span> {props.userID.status} </span>
          </div>
          </div>
         
       </div>
       </div>
    )
}

export default MyProfile