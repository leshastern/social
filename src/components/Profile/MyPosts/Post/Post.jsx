import classes from './Post.module.css'


const Post = (props) => {
    return (
      <div className = {classes.item}>
         <img src = "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg"></img>
             {props.message}
          <div>
          <span> Likes </span> {props.count}
            </div>
      </div>
    )
}

export default Post