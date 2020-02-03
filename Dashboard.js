import React, { Component } from 'react';  
import './App.css';  
import './index.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import NewPatient from "./NewPatient";
import Stuff from "./Stuff";
import {DropdownButton ,Dropdown} from 'react-bootstrap';
import Contact from "./Contact";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


class Dashboard extends Component {
    render() {
      return (
        <HashRouter>
          <div>            
            <ul className="header">
            <li><NavLink to="/">New Patient</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
           
            </ul>
            <div className="content">
            <Route exact path="/" component={NewPatient}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
  
export default Dashboard; 