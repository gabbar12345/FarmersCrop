import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Signin';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Signup></Signup>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>} />
</Routes>
    </Router>
  );
}

export default App;
