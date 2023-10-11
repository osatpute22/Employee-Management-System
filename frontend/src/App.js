
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employee" Component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" Component={AddEmployee}></Route>
            <Route path="/edit-employee/:id" Component={AddEmployee}></Route> 
          </Routes>

        </div>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
