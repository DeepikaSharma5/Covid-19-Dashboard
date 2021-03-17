import React,{Component} from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class World extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    items: res
                })
            });
    }


    render() {
        const {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Still Loading</div>
        } else {
            return (
                <div>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Cases</th>
                                <th>Deaths</th>
                                <th>recovered</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr key={items.cases}>
                                    <td>{items.cases}</td>
                                    <td>{items.deaths}</td>
                                    <td>{items.recovered}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
    }
}
export default World