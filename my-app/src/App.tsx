import { BrowserRouter } from 'react-router-dom';
import NavigationBarComponent from './components/NavigationBarComponent';
import Profile from './components/Hero';
import About from './components/About/About';

import Projects from './components/Projects';
import Experience from './components/ExperienceComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <NavigationBarComponent />
          <Profile /> 
        </div>

        <div className="bg-center bg-no-repeat bg-cover bg-about">
          <About />
        </div>

      
       

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>

       
        </div>
        <Projects /> 
        <div className="relative z-0">
          {/* <Contact /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
