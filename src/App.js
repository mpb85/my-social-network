import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import NotFound from "./components/NotFound/NotFound";
import DailyRoutine from "./components/DailyRoutine/DailyRoutine";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar friends={props.state}/>
                <Switch>
                    <Route path ='/dialogs' render ={()=> <DialogsContainer store={props.store} />}/>
                    <Route path="/profile/:userId" render ={ ()=> <ProfileContainer store={props.store}  />} />
                    <Route path="/users" render ={ ()=> <UserContainer store={props.store}  />} />
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/dailyrountine" component={DailyRoutine}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
