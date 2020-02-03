import React, { Component } from "react";
import {Form,Button, Col} from 'react-bootstrap';
import axios from 'axios';
import {  Input } from 'reactstrap';  
import { Redirect } from "react-router-dom";
import AfterlogNavbar from './AfterlogNavbar';


class NewPatient extends React.Component {
  constructor(props) {
    super(props)
    /*const token = localStorage.getItem("token")

    let loggedIn = true;
    if(token == null){
      loggedIn =false
    }*/
    
    this.state ={
      //loggedIn,
      FirstName: '',
      LastName: '',
      SSN:'',
      DOB: '',
      Tele_No: '',
      Age: '',
      Minor_patient: '',
      Address: '',
      Country_code: '',
      Country_Name: '',
      Relationship_to_patient: '',
      Guardian_Name:''
    }
    this.FirstName = this.FirstName.bind(this);
        this.LastName = this.LastName.bind(this);
        this.SSN = this.SSN.bind(this);
        this.DOB = this.DOB.bind(this);
        this.Tele_No = this.Tele_No.bind(this);
        this.Age = this.Age.bind(this);
        this.Minor_patient = this.Minor_patient.bind(this);
        this.Address = this.Address.bind(this);
        this.Country_code = this.Country_code.bind(this);
        this.Country_Name = this.Country_Name.bind(this);
        this.Relationship_to_patient = this.Relationship_to_patient.bind(this);
        this.Guardian_Name = this.Guardian_Name.bind(this);
        this.NewPatient = this.NewPatient.bind(this);
        
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
   
  }
  FirstName(event){
    this.setState({ FirstName: event.target.value })
}

LastName(event){
  this.setState({ LastName: event.target.value })
}
SSN(event){
  this.setState({ SSN: event.target.value })
}
DOB(event){
  this.setState({ DOB: event.target.value })
}
Tele_No(event){
  this.setState({ Tele_No: event.target.value })
}
Age(event){
  this.setState({ Age: event.target.value })
}
Minor_patient(event){
  this.setState({ Minor_patient: event.target.value })
}
Address(event){
  this.setState({ Address: event.target.value })
}
Country_code(event){
  this.setState({ Country_code: event.target.value })
}
Country_Name(event){
  this.setState({ Country_Name: event.target.value })
}
Relationship_to_patient(event){
  this.setState({ Relationship_to_patient: event.target.value })
}
Guardian_Name(event){
  this.setState({ Guardian_Name: event.target.value })
}

  NewPatient(event) {
    fetch('http://localhost:5187/Api/Patient/AddorUpdatepatient', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
  
        FirstName: this.state.FirstName,
     LastName: this.state.LastName ,
      SSN: this.state.SSN , 
      DOB: this.state.DOB , 
      Tele_No: this.state.Tele_No,
    Age: this.state.Age,
     Minor_patient: this.state.Minor_patient, 
     Address: this.state.Address,
      Country_code: this.state.Country_code,
       Country_Name: this.state.Country_Name ,
       Guardian_Name: this.state.Guardian_Name,
       Relationship_to_patient: this.state.Relationship_to_patient
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status == 'Success')  
                this.props.history.push("/Patientlist");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }
  handleChange = () => {
  	this.setState({
    	checked: !this.state.checked
    })
  }
  
  /*NewPatient = () =>{
    axios.post('http://localhost:5187/Api/Patient/AddorUpdatepatient', {FirstName: this.state.FirstName,
     LastName: this.state.LastName , SSN: this.state.SSN , DOB: this.state.DOB , Tele_No: this.state.Tele_No,
    Age: this.state.Age, Minor_patient: this.state.Minor_patient, Address: this.state.Address, Country_code: this.state.Country_code, Country_Name: this.state.Country_Name}).then
    (JSON =>{
      if(JSON.data.Status === 'Success'){
        console.log(JSON.data.Status);
        this.props.history.push('/Patientlist')
      }
    })
  }
  handleChange = (e) => {
  	this.setState({[e.target.FirstName]: e.target.value
    	//checked: !this.state.checked
    });
  }*/
  /*function FormExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    }*/
  render() {
    
  /* if(this.state.loggedIn === false){
      return <Redirect to="/" />
    }*/

    const content = this.state.checked 
    	? <div> 
        <Form.Row>
          <Form.Group as={Col} controlId="formGridRelation">
           <Form.Label>Relationship to patient</Form.Label>
             <Form.Control type="fname" onChange={this.Relationship_to_patient} placeholder="Enter relationship" />
           </Form.Group>

        <Form.Group as={Col} controlId="formGridGuardian">
          <Form.Label>Guardian Name</Form.Label>
            <Form.Control type="gname" onChange={this.Guardian_Name} placeholder="Enter Guardian name" />
         </Form.Group>
         </Form.Row>

         </div>
      : null;
      
    return (
      <div>
     
     
      <Form /*noValidate validated={validated} onSubmit= {handleSubmit}*/>
         <Form.Row>
             <Form.Group as={Col} controlId="formGridFname">
                 <Form.Label>First Name*</Form.Label>
                 <Input type="text" name="FName" onChange={this.FirstName} placeholder="Enter First Name" /> 
               </Form.Group>

                <Form.Group as={Col} controlId="formGridLname">
                     <Form.Label>Last Name*</Form.Label>
                       <Form.Control type="lname" onChange={this.LastName}  placeholder="Enter last name" required />
                 </Form.Group>
           </Form.Row>

            <Form.Row>
                 <Form.Group as={Col} controlId="formGridSSN">
                      <Form.Label>SSN (Last 4)</Form.Label>
                         <Form.Control type="ssn" onChange={this.SSN}  placeholder="Enter ssn number xxxx" maxLength= '4' />
                 </Form.Group>

                    <Form.Group as={Col} controlId="formGridDOB">
                         <Form.Label>Date Of Birth*</Form.Label>
                             <Form.Control type="dob" onChange={this.DOB} placeholder="Enter your DOB DD/MM/YYYY" maxLength = '10' required />
                   </Form.Group>
  
               </Form.Row>

         <Form.Row>

              <Form.Group as={Col} controlId="formGridTno">
                  <Form.Label>Telephone number*</Form.Label>
                      <Form.Control type="tno" onChange={this.Tele_No}  placeholder="Enter number xxx-xxx-xxxx" maxLength= '12' required />
                   </Form.Group>

               <Form.Group as={Col} controlId="formGridAge">
                   <Form.Label>Age*</Form.Label>
                       <Form.Control type="age" onChange={this.Age} placeholder="Enter your age" maxLength = '3' required />
                 </Form.Group>

             <Form.Group as={Col} controlId="formGridSwitch">
                   <Form.Label>Minor Patient</Form.Label>
                   <Form.Check
                       type ="switch"   
                            checked={ this.state.checked } 
                            onChange ={this.handleChange}
                                label="Check this  if patient age is < 18yrs"
                     />
                     {content}
                    </Form.Group>
             </Form.Row>

        <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress">
                   <Form.Label>Address*</Form.Label>
                       <Form.Control type="address" onChange={this.Address}  placeholder="Enter your address" required />
              </Form.Group>

               <Form.Group as={Col} controlId="formGridPinCode">
                       <Form.Label>Country Code*</Form.Label>
                             <Form.Control type="code" onChange={this.Country_code}  placeholder="Enter country code" maxLength = '6' required />
                 </Form.Group>

                  <Form.Group as={Col} controlId="formGridCountryName">
                        <Form.Label>Country Name*</Form.Label>
                               <Form.Control type="Country name" onChange={this.Country_Name}  placeholder="Enter country name" required />
                   </Form.Group>
                        </Form.Row>
      <Button onClick={this.NewPatient} variant="primary" type="button">
        Save
      </Button>
      <Form.Group></Form.Group>
      <Button  variant="danger" >
        Cancel
      </Button>{' '}
    </Form>
    </div>
    );
  }
}
 
export default NewPatient;