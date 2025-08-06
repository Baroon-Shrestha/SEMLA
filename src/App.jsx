import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";
import StudyKorea from "./Pages/StudyKorea"; // ✅ Import StudyKorea
import StudyFinland from "./Pages/StudyFinland";
import HomeTestimonials from "./Components/HomeComponents/HomeTestimonials";
import Courses from "./Pages/Courses";

import StudyJapan from "./Pages/StudyJapan";
import StudyCyprus from "./Pages/StudyCyprus";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/korea" element={<StudyKorea />} /> {/* ✅ Added Route */}
        <Route path="/japan" element={<StudyJapan />} />
        <Route path="/finland" element={<StudyFinland />} />
        <Route path="/Cyprus" element={<StudyCyprus />}/>
        <Route path="/Courses" element={<Courses />}/>

       <Route path="/HomeTestimonials" element={<HomeTestimonials/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
