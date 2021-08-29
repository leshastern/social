import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfile from './MyProfile/MyProfile'
import classes from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className = "Profile">
        <MyProfile />
       <MyPostsContainer store = {props.store} />
      </div>
    )
}

export default Profile