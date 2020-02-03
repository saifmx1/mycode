import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';

class Table extends Component{
    constructor(props){
        super(props);
    }

    DeletePatient = () =>{
        axios.delete('http://localhost:5187/Api/Patient/DeletePatient?id='+this.props.obj.Id).then
        (JSON => {
            if(JSON.data.Status === 'Delete'){
                alert('Record deleted successfully!!!');
            }
        })
    }

    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.FirstName}
                </td>
                <td>
                    {this.props.obj.LastName}
                </td>
                <td>
                    {this.props.obj.SSN}
                </td>
                <td>
                    {this.props.obj.DOB}
                </td>
                <td>
                    {this.props.obj.Tele_No}
                </td>
                <td>
                    {this.props.obj.Age}
                </td>
                <td>
                    {this.props.obj.Minor_patient}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>
                <td>
                    {this.props.obj.Country_code}
                </td>
                <td>
                    {this.props.obj.Country_Name}
                </td>
                <td>
                    {this.props.obj.Relationship_to_patient}
                </td>
                <td>
                    {this.props.obj.Guardian_Name}
                </td>
                <td>
                <Link to={"/EditPatient/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
                 </td>  
          <td>  
            <button type="button" onClick={this.DeletePatient} className="btn btn-danger">Delete</button>  
            </td>
            </tr>
        )
    }
}

export default Table;