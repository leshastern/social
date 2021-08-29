import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
 


const App = (props) => {
    return (
      
    <BrowserRouter>
      <div className = "app-wrapper">
      <Header />
      <Navbar />
      <div className = "app-wrapper-content">
        <Route path = '/dialogs' render = {() => <Dialogs messagePage = {props.state.messagePage} dispatch = {props.dispatch} />}/>
        <Route path = '/profile' render = {() => <Profile postData = {props.state.profilePage.postData} dispatch = {props.dispatch} />}/>
        <Route path = '/news' render = {() => <News />}/>
        <Route path = '/music' render = {() => <Music />}/>
        <Route path = '/settings' render = {() => <Settings />}/>
      </div>
     </div>
     
    </BrowserRouter>
  );
}
export default App;



