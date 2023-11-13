import React from "react";
import Home from "./Sections/Home";
import AboutUspg from "./Aboutpg/Aboutpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./Contact/Contact";
import ProductPage from "./Products/Products";
import AdmissionForm from "./Admission/Admission";
import Project from "./Why Join Us Page/ProjectBase";
import Internship from "./Why Join Us Page/Intern";
import InstructorPage from "./Why Join Us Page/Instructor";




const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/about" element={<AboutUspg />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/Admission" element={<AdmissionForm />}/>
            <Route path="/products" element={<ProductPage />}/>
            <Route path="/courses" element={<ProductPage/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/Intership" element={<Internship/>}/>
            <Route path="/Instructor" element={<InstructorPage/>}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
