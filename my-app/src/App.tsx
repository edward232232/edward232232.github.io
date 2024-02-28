import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 w-full md:w-auto bg-gradient-to-b from-slate-600 to-black-800 md:flex md:flex-col">
        <div className="w-full md:w-auto md:flex md:flex-col">
          <NavBar />
          <Profile />
        </div>

        <div className="w-full md:w-auto bg-center bg-no-repeat bg-cover md:flex md:flex-col">
          <About />

          <Skills />
        </div>

        <div className="bg-gray-400 bg-center bg-no-repeat rounded-[100px] rounded-br-[200px] m-2 md:flex md:flex-col">
          <Experience />
        </div>
        <Projects />
        <div className="relative z-0 w-full m-2 md:w-auto">
          <Contacts />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
