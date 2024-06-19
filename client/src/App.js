import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/createproject"> Adicionar projeto</Link>
        <Link to="/"> Home</Link>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/createproject" exact component={CreateProject}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
