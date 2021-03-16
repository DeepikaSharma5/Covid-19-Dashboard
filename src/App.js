import {Button , Alert, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDetails from "./component/CustomDetails";
import {Link, BrowserRouter as Router, Switch,Route,HashRouter} from "react-router-dom";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Route component={CustomDetails} path='/customDetails'></Route>
            <Route component={Dashboard} path='/dashboard'></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
