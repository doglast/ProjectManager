import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/createproject"> Adicionar projeto</Link>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/createproject" exact component={CreateProject}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
