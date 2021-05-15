import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import NotFound from "./components/NotFound/NotFound";
import DailyRoutine from "./components/DailyRoutine/DailyRoutine";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header />
                <Navbar friends={props.state}/>

                <Switch>
                    <Route path ='/dialogs' render ={()=> <Dialogs setAddUser={props.setAddUser}
                                                                   state={props.state} dispatch={props.dispatch} />}/>

                    <Route path="/profile" render ={ ()=> <Profile state={props.state} dispatch={props.dispatch} />} />
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
