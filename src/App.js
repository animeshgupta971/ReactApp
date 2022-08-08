// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
// import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
// import ServicePage from "./Components/ServicePage";
// import ContactUs from "./Components/ContactUs";
// import SkillsPage from "./Components/SkillsPage";

function App() {
  return (
    <>
   <Navbar></Navbar>
    <About></About>
    <TechnicalSkills></TechnicalSkills>
    <Services></Services>
    <Footer></Footer>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<SkillsPage />}/>
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUs />} />


        </Routes>
      </BrowserRouter> */}

    </>

  );
}

export default App;