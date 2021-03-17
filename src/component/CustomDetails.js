import React,{Component} from "react";
import Header from './Header';
import {Button, Form,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

class CustomDetails extends Component{

    constructor(props) {
        super(props);
        this.state ={
            items:[{email:'',country:'',new_case:'',total_case:'',total_death:''}]
        }
    }

    addData(e){
        e.preventDefault();
        const {items}=this.state;
        const newData = this.newData.value;
        this.setState({
            items:[...this.state.items, newData],
        })
        this.addForm.reset();
    }


    render() {
        const {items}=this.state;
        return(
            <div>
                <div>
                    <Header/>
                    <div>
                    <Form ref={input =>this.addForm = input} onSubmit={(e)=>{this.addData(e)}}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control required ref={input =>this.newData= input}  type="email" placeholder="Enter email" />

                        <Form.Group controlId="formBasicCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control required ref={input =>this.newData= input}  type="text" placeholder="Enter country" />
                        </Form.Group>

                         <Form.Group controlId="formBasicNewCases">
                        <Form.Label>New Cases</Form.Label>
                        <Form.Control required ref={input =>this.newData= input}  type="text" placeholder="Enter no of new cases" />
                        </Form.Group>

                         <Form.Group controlId="formBasicCases">
                        <Form.Label>Total cases</Form.Label>
                        <Form.Control required ref={input =>this.newData= input}  type="text" placeholder="Enter no of total cases" />
                        </Form.Group>

                        <Form.Group controlId="formBasicDeath">
                        <Form.Label>Total death</Form.Label>
                        <Form.Control required ref={input =>this.newData= input} type="text" placeholder="Enter no of total deaths" />
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
                      {items.map(item => {
                          return(
                              <tr key={item.country}>
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