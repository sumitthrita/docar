import React from "react";
import './App.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Service from './components/Service';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Feedback from './components/FeedbackHome';

 
const App=()=> {
  
  return ( 
    <Router>
        <div>
         {/* <Homepage /> */}
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           <Route path="/services" exact strict component={Service} />
           <Route path="/contact" exact strict component={Contact}/>
           <Route path="/signup" exact strict component={SignUp}/>
           <Route path="/login" exact strict component={Login}/>
           <Route path="/feedback" eact strict component={Feedback} />
          </Switch>
         </div>
   </Router>    
  );
} 

export default App;

