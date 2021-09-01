import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
      <div className = {classes.nav}>
        <nav>
        <div className = {classes.item}>
          <NavLink to="/profile" activeClassName = {classes.active}>Profile</NavLink>
        </div>
        <div className = {classes.item}>
          <NavLink to = "/dialogs"activeClassName = {classes.active}>Messages</NavLink>
        </div>
        <div className = {classes.item}>
          <a className = {classes.inactive}>News</a>
        </div>
        <div className = {classes.item}>
          <a className = {classes.inactive}>Music</a>
        </div>
        <div className = {classes.item}>
            <a className = {classes.inactive}>Settings</a>
        </div>
      </nav>
      </div>
    )
}

export default Navbar