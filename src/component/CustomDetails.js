import React,{Component} from "react";
import Header from './Header';
import {Button, Alert, Card, Form,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

class CustomDetails extends Component{

    constructor(props) {
        super(props);

        this.state = {
            items :[],
            email: '',
            country: '',
            new_case:'',
            total_case:'',
            total_death:''

        }
    }

    handleUserEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleUserCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }
    handleUserNewCase = (event) => {
        this.setState({
            new_case: event.target.value
        })
    }
    handleUserTotalCase = (event) => {
        this.setState({
            total_case: event.target.value
        })
    }
    handleUserTotalDeath = (event) => {
        this.setState({
            total_death: event.target.value
        })
    }
    handleSubmit = event =>{
        const { email,country,new_case,total_case,total_death } =this.state;
        localStorage.setItem('email',email);
        localStorage.setItem('country',country);
        localStorage.setItem('new_case',new_case);
        localStorage.setItem('total_case',total_case);
        localStorage.setItem('total_death',total_death);

    }

    componentDidMount() {
        const email = localStorage.getItem('email');
        const country = localStorage.getItem('country');
        const new_case = localStorage.getItem('new_case');
        const total_case = localStorage.getItem('total_case');
        const total_death = localStorage.getItem('total_death');
        this.setState({ email,country,new_case,total_case,total_death });
    }


    render() {
        return(
            <div>
                <Header/>
                <br></br>
                <div>
                    <Form md="10" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control required value={this.state.items.email} onChange={this.handleUserEmail} type="email" placeholder="Enter email" />

                        <Form.Group controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control required value={this.state.items.country} onChange={this.handleUserCountry} type="text" placeholder="Enter country" />
                        </Form.Group>

                         <Form.Group controlId="formBasicNewCases">
                        <Form.Label>New Cases</Form.Label>
                        <Form.Control required value={this.state.items.new_case} onChange={this.handleUserNewCase} type="text" placeholder="Enter no of new cases" />
                        </Form.Group>

                         <Form.Group controlId="formBasicCases">
                        <Form.Label>Total cases</Form.Label>
                        <Form.Control required value={this.state.items.total_case} onChange={this.handleUserTotalCase} type="text" placeholder="Enter no of total cases" />
                        </Form.Group>

                        <Form.Group controlId="formBasicDeath">
                        <Form.Label>Total death</Form.Label>
                        <Form.Control required value={this.state.items.total_death} onChange={this.handleUserTotalDeath} type="text" placeholder="Enter no of total deaths" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Submit</Button>
                        </Form.Group>
                    </Form>

                </div>
                <div>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Country</th>
                          <th>New cases</th>
                          <th>Total cases</th>
                          <th>Total deaths</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.email}</td>
                          <td>{this.state.country}</td>
                          <td>{this.state.new_case}</td>
                          <td>{this.state.total_case}</td>
                          <td>{this.state.total_death}</td>
                        </tr>
                      </tbody>
                    </Table>
                </div>
                <Footer/>
            </div>
        )
    }}

export default CustomDetails;