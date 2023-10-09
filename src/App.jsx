import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from './components/About'
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollArrow";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
      <ScrollTopButton />
    </div>
  );
};

export default App;
