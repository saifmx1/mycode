 
import React, { Component } from 'react'; 
import logo from './logo.svg';  
import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import Dropdown from 'react-bootstrap/Dropdown';
import NewPatient from './NewPatient';
import EditPatient from './EditPatient';
import Patientlist from './Patientlist';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

class BeforelogNavbar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>  
      
  
               
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/' component={Login} />    
          <Route path='/Signup' component={Reg} />    
       <Route path ='/CreatePatient' component={NewPatient}></Route>
       <Route path = '/EditPatient/' component ={EditPatient}></Route>
       <Route path='/Patientlist' component={Patientlist}></Route>
       
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
      </div>    
    </Router>  


        );
    }
}
export default BeforelogNavbar;