import React,{Component} from "react";
import {CardDeck,Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import World from "./World";
import Countries from "./Countries";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component{
    render() {
        return(
            <div>
                <Header/>
                <div>
                    <CardDeck>
                      <Card>
                        <Card.Body>
                          <Card.Title><World/></Card.Title>
                          <Card.Text>

                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Body>
                          <Card.Title><Countries/></Card.Title>
                          <Card.Text>

                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                </div>
                <Footer/>
            </div>

        )

    }
}
export default Dashboard