import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDetails from "./component/CustomDetails";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Chart from "./component/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Route component={CustomDetails} path='/customDetails'></Route>
            <Route component={Dashboard} path='/dashboard'></Route>
            <Route component={Chart} path='/chart'></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
