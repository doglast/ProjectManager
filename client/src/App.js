import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';
import Project from './pages/Project';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/createproject"> Criar um projeto</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createproject" exact element={<CreateProject/>} />
          <Route path="/project/:project_id" exact element={<Project/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
