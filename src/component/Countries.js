import React,{Component} from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Countries extends Component{
   constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
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
                                <th>Country</th>
                                <th>Cases</th>
                                <th>Today Cases</th>
                                <th>Deaths</th>
                                <th>Today Deaths</th>
                                <th>Recovered</th>
                            </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                <tr key={item.country}>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.todayCases}</td>
                                    <td>{item.deaths}</td>
                                    <td>{items.todayDeaths}</td>
                                    <td>{items.recovered}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

            )
        }
    }
}
export default Countries