import React from 'react'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'




let mapDispatchToProps = (dispatch) => {
  return { }
}

let mapStateToProps = (state) => {
  return {
      userID : state.profilePage.userID
  }
}


const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile);




export default MyProfileContainer