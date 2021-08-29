import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
import classes from './Profile.module.css'


const Profile = (props) => {

    return (
        <div className = "Profile">
        <MyProfile />
       <MyPosts postData = {props.profilePage.postData}  dispatch = {props.dispatch} newPostText = {props.profilePage.newPostText} />
      </div>
    )
}

export default Profile