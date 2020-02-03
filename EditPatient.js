import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios';

class EditPatient extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            FirstName: '',
            LastName: '',
            SSN:'',
            DOB: '',
            Tele_No: '',
            Age: '',
            Minor_patient: '',
            Address: '',
            Country_code: '',
            Country_Name: ''
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeSSN = this.onChangeSSN.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeTele_No = this.onChangeTele_No.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeMinor_patient = this.onChangeMinor_patient.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCountry_code = this.onChangeCountry_code.bind(this);
        this.onChangeCountry_Name = this.onChangeCountry_Name.bind(this);
        //this.EditPatient =this.EditPatient.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    onChangeFirstName(e){
        this.setState({
            FirstName: e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            LastName: e.target.value
        });
    }

    onChangeSSN(e){
        this.setState({
            SSN: e.target.value
        });
    }

    onChangeDOB(e){
        this.setState({
            DOB: e.target.value
        });
    }

    onChangeTele_No(e){
        this.setState({
            Tele_No:e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            Age: e.target.value
        });
    }

    onChangeMinor_patient(e){
        this.setState({
            Minor_patient: e.target.value
        });
    }

    onChangeAddress(e){
        this.setState({
            Address: e.target.value
        });
    }

    onChangeCountry_code(e){
        this.setState({
            Country_code: e.target.value
        });
    }

    onChangeCountry_Name(e){
        this.setState({
            Country_Name: e.target.value
        });
    }

    /*EditPatient(event) {
        fetch('http://localhost:5187/Api/Patient/PatientdetailsById?id=', {  
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
           Country_Name: this.state.Country_Name  
          })  
        }).then(reponse => {
            this.setState({
             FirstName: reponse.data.FirstName,
            LastName: reponse.data.LastName,
            SSN: reponse.data.SSN,
            DOB: reponse.data.DOB,
            Tele_No: reponse.data.Tele_No,
            Age: reponse.data.Age,
            Minor_patient: Response.data.Minor_patient,
            Address: reponse.data.Address,
            Country_code: reponse.data.Country_code,
            Country_Name: reponse.data.Country_Name
            });
        }) 
          .then((Result) => {  
            if (Result.Status == 'Success')  
                    this.props.history.push("/Patientlist");  
            else  
              alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
          })  
      }*/
    componentDidMount(){
        axios.get('http://localhost:5187/Api/Patient/PatientdetailsById?id='+this.props.match.params.id)
        .then(reponse => {
            this.setState({
             FirstName: reponse.data.FirstName,
            LastName: reponse.data.LastName,
            SSN: reponse.data.SSN,
            DOB: reponse.data.DOB,
            Tele_No: reponse.data.Tele_No,
            Age: reponse.data.Age,
            Minor_patient: Response.data.Minor_patient,
            Address: reponse.data.Address,
            Country_code: reponse.data.Country_code,
            Country_Name: reponse.data.Country_Name
            });
        }).catch(function(error){
            console.log(error);
        })
    }

    /*onSubmit(e) {
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
           Country_Name: this.state.Country_Name  
          })  
        }).then((Response) => Response.json())  
          .then((Result) => {  
            if (Result.Status == 'Success')  
                    this.props.history.push("/Patientlist");  
            else  
              alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
          })  
      }*/

    onSubmit(e){
        debugger;
        e.preventDefault();
        const obj ={
            Id: this.props.match.params.id,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName ,
             SSN: this.state.SSN , 
            DOB: this.state.DOB ,
            Tele_No: this.state.Tele_No,
             Age: this.state.Age,
             Minor_patient: this.state.Minor_patient,
              Address: this.state.Address,
             Country_code: this.state.Country_code, 
            Country_Name: this.state.Country_Name
        }
        axios.post('http://localhost:5187/Api/Patient/AddorUpdatepatient/', obj)  
    .then(res => console.log(res.data));  
    debugger;  
    this.props.history.push('/Patientlist')
    };
    
    render() {  
        return (  
            <Container className="App">  
  
             
                <Form className="form" onSubmit={this.onSubmit}>  
                
                <Col>  
                        <FormGroup row>  
                            <Label for="FirstName" sm={2}>FirstName</Label>  
                            <Col sm={10}>  
                                <Input type="FName" name="FName"  onChange={this.onChangeFirstName}  
                                placeholder="Enter Firstname" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="LastName" sm={2}>LastName</Label>  
                            <Col sm={10}>  
                                <Input type="lname" name="lname" onChange={this.onChangeLastName} placeholder="Enter last name" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>SSN</Label>  
                            <Col sm={10}>  
                                <Input type="ssn" name="SSN" onChange={this.onChangeSSN} placeholder="Enter ssn number xxxx" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>DOB</Label>  
                            <Col sm={10}>  
                                <Input type="dob" name="DOB"onChange={this.onChangeDOB} placeholder="Enter your DOB DD/MM/YYYY" />  
                            </Col>  
                        </FormGroup>   
                        
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Telephone No.</Label>  
                            <Col sm={10}>  
                                <Input type="tno" name="Tele_No"onChange={this.onChangeTele_No} placeholder="Enter number xxx-xxx-xxxx" />  
                            </Col>  
                        </FormGroup> 
                         
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Age</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Age"onChange={this.onChangeAge} placeholder="Enter your age" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Minor_patient</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Minor_patient" onChange={this.onChangeMinor_patient} placeholder="Enter details" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Address"onChange={this.onChangeAddress} placeholder="Enter your address" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Country_code</Label>  
                            <Col sm={10}>  
                                <Input type="text" name=" Country_code" onChange={this.onChangeCountry_code} placeholder="Enter country code" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Country Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Country_Name" onChange={this.onChangeCountry_Name} placeholder="Enter country name" />  
                            </Col>  
                        </FormGroup> 

                    </Col>  

                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" onClick={this.EditPatient} color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
  
}  

export default EditPatient;
    



