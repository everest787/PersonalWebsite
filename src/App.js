import './sass/main.scss';
import { useState } from 'react';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";
import Contact from "./components/Contact";

function App() {
  const [component, setComponent] = useState(0);

  function handleClick(value) {
    if (component === value){
      setComponent(0);
    }
    else{
      setComponent(value);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <main className="content">
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(1)}>About Me</button>
              </li>
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(2)}>Projects</button>
              </li>
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(3)}>Work History</button>
              </li>
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(4)}>Contact Me</button>
              </li>
            </ul>
          </nav>
          <div className="overview">
            {(component===1) ? <AboutMe /> : null}
            {(component===2) ? <Projects /> : null}
            {(component===3) ? <WorkHistory /> : null}
            {(component===4) ? <Contact /> : null}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
