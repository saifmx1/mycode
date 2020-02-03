 
import React, { Component } from 'react'; 
import logo from './logo.svg';  
import './App.css';  
 
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import Dropdown from 'react-bootstrap/Dropdown';
import NewPatient from './NewPatient';
import EditPatient from './EditPatient';
import Patientlist from './Patientlist';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Login from './Login';
import CreatePatient from './CreatePatient'

class AfterlogNavbar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
<Router>    
          
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
               
       <li className="nav-item" ><Link to={'/NewPatient'} className="nav-link">New Patient</Link></li>
    <li className="nav-item"><Link to={'/Patientlist'} className="nav-link">Patient List</Link></li>
    <li className="nav-item"><Link to={'/Login'} className="nav-link">Log out</Link></li>
  
               
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
             
       <Route path ='/CreatePatient' component={CreatePatient}></Route>
       <Route path = '/EditPatient/' component ={EditPatient}></Route>
       <Route path='/Patientlist' component={Patientlist}></Route>
       <Route path='/Login' component ={Login}></Route>
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
        
    </Router>  


        );
    }
}
export default AfterlogNavbar;