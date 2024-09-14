import "./App.css";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
