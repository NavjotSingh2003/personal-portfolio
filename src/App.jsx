import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/skills_new/skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />*
    </>
  );
}
