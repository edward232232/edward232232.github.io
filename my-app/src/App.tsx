import { BrowserRouter } from "react-router-dom";
import NavigationBarComponent from "./components/NavigationBarComponent";
import Profile from "./components/Hero";
import About from "./components/About/About";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-b from-purple-900 to-black-900">
        <div>
          <NavigationBarComponent />
          <Profile />
        </div>

        <div className="bg-center bg-no-repeat bg-cover">
          <About />

          <Skills />
        </div>

        <div className="bg-gray-400 bg-center bg-no-repeat rounded-[200px] rounded-br-[200px] m-40">
          <Experience />
          
        </div>
        <Projects />
        <div className="relative z-0"> <Contact /> </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
