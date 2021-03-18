import React, {Component} from "react";
import Header from './Header';
import {Button, Form, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

class CustomDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            message: ""
        };
    }

    addData = (e) => {
        e.preventDefault();
        const {items} = this.state;

        const newData = {
            email: e.target.email.value,
            country: e.target.country.value,
            new_case: e.target.new_case.value,
            total_case: e.target.total_case.value,
            total_death: e.target.total_death.value
        };

        const isOnTheList = items.some((item) => item.country === newData.country);

        if (isOnTheList) {
            this.setState({
                message: "This country details are already added."
            });
        } else {
            this.setState((prevState) => ({
                items: [...prevState.items, newData]
            }));
        }
        e.target.reset();
    };

    render() {
        const {items, message} = this.state;
        return (
            <div>
                <div>
                    <Header/>
                    <div>
                        <Form onSubmit={this.addData}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Email :</Form.Label><br/>
                                <input required
                                       name="email"
                                       type="email"
                                       placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Country :</Form.Label><br/>
                                <input required
                                       name="country"
                                       type="text"
                                       placeholder="Enter country"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>New Cases :</Form.Label><br/>
                                <input required
                                       name="new_case"
                                       type="text"
                                       placeholder="Enter no of new cases"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Total cases :</Form.Label><br/>
                                <input required
                                       name="total_case"
                                       type="text"
                                       placeholder="Enter no of total cases"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Total death :</Form.Label><br/>
                                <input required
                                       name="total_death"
                                       type="text"
                                       placeholder="Enter no of total deaths"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit</Button><br/>
                        </Form>

                    </div>
                    <br/>
                    <div>
                        {message !== '' && <p>{this.state.message}</p>}
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
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{item.email}</td>
                                        <td>{item.country}</td>
                                        <td>{item.new_case}</td>
                                        <td>{item.total_case}</td>
                                        <td>{item.total_death}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default CustomDetails;