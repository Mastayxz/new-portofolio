import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experiences/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
