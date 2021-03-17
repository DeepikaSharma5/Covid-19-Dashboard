import React,{Component} from "react";
import {Navbar,Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from "react-router-dom";

class Header extends Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">COVID 19 DASHBOARD</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link ><Link to ='/dashboard'>Dashboard</Link></Nav.Link>
                    <Nav.Link ><Link to = '/customDetails'>Custom Input</Link></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Header