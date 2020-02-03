import React, { Component } from 'react';  
import './App.css';  
import {Redirect} from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import AfterlogNavbar from './AfterlogNavbar';
import { Navbar } from 'react-bootstrap';
import BeforelogNavbar from './BeforelogNavbar';


class Login extends Component {  
    constructor(props) {  
        super(props);  
        //let loggedIn =false;
        this.state = {  
            Email: '',  
            Password: '' ,
            showMe:true ,
            clicked: false
        }  
  
        this.Password = this.Password.bind(this);  
        this.Email = this.Email.bind(this);  
        this.login = this.login.bind(this);  
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }  
  
    Email(event) {  
        this.setState({ Email: event.target.value })  
    }  
    Password(event) {  
        this.setState({ Password: event.target.value })  
    }  
    mySubmitHandler = (event) =>{
        event.preventDefault();
         let pass = this.state.Password;
         if(!Number(pass)){
             alert("Plaese enetr valid password");
         }

    }
   
   
    /*handleChange = () => {
        this.setState({
          clicked: !this.state.clicked
      })
    }*/

    login(event) {  
        const {showMe} = this.state;
        this.setState({
            showMe: !showMe,
        });
        debugger;  
        fetch('http://localhost:5187/Api/login/Login', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                Email: this.state.Email,  
                Password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == 'Invalid')  
                    alert('Invalid User');  
                else  {
                
                    this.props.history.push("/CreatePatient");
                   
                    alert('Valid user')  ;
            }
            })  
    }  
  
    render() {  
     
        return (  
            <div className="app flex-row align-items-center">  
            
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form  onSubmit={this.mySubmitHandler}>  
                                            <div class="row" className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                    Login  
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button type='submit' onClick={this.login} color="success" block>Login</Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
        );  
    }  
}  
  
export default Login; 