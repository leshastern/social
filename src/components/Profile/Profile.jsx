import MyPosts from './MyPosts/MyPosts'
import MyProfile from './MyProfile/MyProfile'
import classes from './Profile.module.css'


const Profile = (props) => {
    console.log(props);
    return (
        <div className = "Profile">
        <MyProfile />
       <MyPosts postData = {props.postData}  dispatch = {props.dispatch} newPostText = {props.postData.newPostText} />
      </div>
    )
}

export default Profile