import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor";
import GlobalBackground from "./components/GlobalBackground";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (projectName, features) => {
    setModalData({
      projectName,
      features: features.split(",").map((f) => f.trim()),
    });
  };

  const closeModal = () => setModalData(null);

  return (
    <ThemeProvider>
      <CustomCursor />
      <GlobalBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <EducationExperience />
      <Skills />
      <Services />
      <Projects openModal={openModal} />
      <Testimonials />
      <Contact />
      <Footer />
      <Modal data={modalData} onClose={closeModal} />
    </ThemeProvider>
  );
}

export default App;
