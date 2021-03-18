import React, {Component} from "react";
import {Line} from "react-chartjs-2";

class Chart extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            labels: ['Total Cases', 'Total Deaths', 'Total Recovered'],
            datasets: [
                {
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [1, 2, 3]
                }
            ]
        }
    }

    render() {
        const {items} = this.state;
        const data1 = items.cases;
        const data2 = items.deaths;
        const data3 = items.recovered;
        return (
            <div>
                <h1>Word Covid Details</h1>
                <h1>{data3}</h1>

                <Line
                    data={{
                        labels: this.state.labels,
                        datasets: {
                            backgroundColor: this.state.datasets.backgroundColor,
                            borderColor: this.state.datasets.borderColor,
                            borderWidth: this.state.datasets.borderWidth,
                            data: [{data1}, {data2}, {data3}]
                        }
                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'World wide Covid Cases',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                    height='50%'/>
            </div>
        );
    }
}

export default Chart
