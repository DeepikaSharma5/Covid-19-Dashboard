import React, {Component} from "react";
import Header from './Header';
import {Button, Form, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

class CustomDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{email: '', country: '', new_case: '', total_case: '', total_death: ''}],
            message: ''
        }
        this.newData = React.createRef();
        this.addForm = React.createRef();

    }

    addData(e) {
        e.preventDefault();
        const {items} = this.state;
        const newData = () => ({
            email: this.addForm.email.value,
            country: this.addForm.country.value,
            new_case: this.addForm.new_case.value,
            total_case: this.addForm.total_case.value,
            total_death: this.addForm.total_death.value
        })

        const isOnTheList = items.includes(newData.country);

        if (isOnTheList) {
            this.setState(({
                message: 'This country details are already added.'
            }))
        } else {
            this.setState({
                items: [...this.state.items, newData()],
            })
        }
        this.addForm.reset();
    }


    render() {
        const {items, message} = this.state;
        return (
            <div>
                <div>
                    <Header/>
                    <div>
                        <Form ref={input => this.addForm = input} onSubmit={(e) => {
                            this.addData(e)
                        }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Email :</Form.Label><br/>
                                <input required ref={input => this.newData["email"] = input} name="email"
                                       value={this.state.items.email}
                                       type="email"
                                       placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCountry">
                                <Form.Label>Country :</Form.Label><br/>
                                <input required ref={input => this.newData["country"] = input} name="country"
                                       value={this.state.items.country}
                                       type="text"
                                       placeholder="Enter country"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicNewCases">
                                <Form.Label>New Cases :</Form.Label><br/>
                                <input required ref={input => this.newData["new_case"] = input}
                                       name="new_case"
                                       value={this.state.items.new_case} type="text"
                                       placeholder="Enter no of new cases"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCases">
                                <Form.Label>Total cases :</Form.Label><br/>
                                <input required ref={input => this.newData["total_case"] = input}
                                       name="total_case"
                                       value={this.state.items.total_case} type="text"
                                       placeholder="Enter no of total cases"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDeath">
                                <Form.Label>Total death :</Form.Label><br/>
                                <input required ref={input => this.newData["total_death"] = input}
                                       name="total_death"
                                       value={this.state.items.total_death} type="text"
                                       placeholder="Enter no of total deaths"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit</Button>
                        </Form>

                    </div>
                    <div>
                        {
                            message !== '' && <p>{this.setState.message}</p>
                        }
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