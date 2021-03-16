import React,{Component} from "react";

import {Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render() {
        return(
            <div>
                 <Navbar bg="dark" variant="dark" fixed="bottom" >
                <Navbar.Brand style={{float:'center',textAlign:'center'}} href="#home">Copyright @2021 Deepika Srinivasan</Navbar.Brand>
            </Navbar>
            </div>
        )
    }
}
export default Footer