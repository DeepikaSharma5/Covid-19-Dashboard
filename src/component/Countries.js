import React,{Component} from "react";
import {Button, Alert, Card, Form,Table} from "react-bootstrap";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
                    <div>
                         <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                </div>
            )
        }
    }
}
export default Countries