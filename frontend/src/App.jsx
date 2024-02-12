import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from './pages/contact/contactPage';
import Services from "./pages/Services";
import Doctors from "./pages/Doctor/Doctor";
import Signup from "./pages/registration/Signup"
import Login from "./pages/registration/Login";
import BookingPage from "./pages/Doctor/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        

      </Routes>
    </Router>
  );
}

export default App;
