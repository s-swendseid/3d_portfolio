import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          {!isMobile && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
