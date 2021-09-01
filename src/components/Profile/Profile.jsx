import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfileContainer from './MyProfile/MyProfileContainer';
import classes from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className = "Profile">
        <MyProfileContainer />
       <MyPostsContainer  />
      </div>
    )
}

export default Profile