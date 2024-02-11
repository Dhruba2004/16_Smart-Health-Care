import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from './pages/contact/contactPage';
import Services from "./pages/Services";
import Doctors from "./pages/Doctor/Doctor";
import Signup from "./pages/registration/Signup"
import DoctorPage from './pages/Doctor/DoctorPage'
import Login from "./pages/registration/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<DoctorPage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>

      </Routes>
    </Router>
  );
}

export default App;
