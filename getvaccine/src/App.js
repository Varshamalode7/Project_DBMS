import Home from "./components/Home"
import Slot from "./components/Slot"
import './App.css';
import Signup from "./components/SignUp"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Main from "./Main";
 import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/getSlot" element={<Slot/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
