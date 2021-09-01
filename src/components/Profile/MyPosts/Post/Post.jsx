import classes from './Post.module.css'


const Post = (props) => {
    return (
      <div className = {classes.item}>
         <img src = {props.ava}></img>
             <div className = {classes.item_message}>
                {props.message}
               </div>
             <div>
                <span> Мне нравится </span> {props.count}
             </div>
          <div>
          
            </div>
      </div>
    )
}

export default Post