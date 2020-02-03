import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table'; 

export default class Patientlist extends Component{
    constructor(props){
        super(props);
        this.state ={business:[]};
    }
    componentDidMount(){
        debugger;
        axios.get('http://localhost:5187/Api/Patient/PatientDetails').then
        (response => {
            this.setState({business: response.data});
            debugger;
        })
        .catch(function(error){
            console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
        return <Table obj={object} key = {i} />;
      });
    }

    render() {  
        return (  
          <div>  
            <h4 align="center">Patient List</h4>  
            <table className="table table-striped" style={{ marginTop: 10 }}>  
              <thead>  
                <tr>  
                  <th>FirstName</th>  
                  <th>LastName</th>  
                  <th>SSN</th>  
                  <th>DOB</th>  
                  <th>Tele_No</th>
                  <th>Age</th>
                  <th>Minor_patient</th>
                  <th>Address</th>
                  <th>Country_code</th>
                  <th>Country_Name</th>
                  <th>Relationship_to_patient</th>
                  <th>Guardian_Name</th>
                  <th colSpan="4">Action</th>  
                </tr>  
              </thead>  
              <tbody>  
               { this.tabRow() }   
              </tbody>  
            </table>  
          </div>  
        );  
      }  
}

