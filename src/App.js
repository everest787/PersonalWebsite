import './sass/main.scss';
import { useState } from 'react';
import Overview from "./components/Overview";

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
                <button className="navigation__button" onClick={() => handleClick(1)}>One</button>
                {(component===1) ? <h1>hehehehe</h1> : null}
              </li>
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(2)}>Two</button>
                {(component===2) ? <h1>hohohoho</h1> : null}
              </li>
              <li className="navigation__item">
                <button className="navigation__button" onClick={() => handleClick(3)}>Three</button>
              </li>
            </ul>
          </nav>
          <div className="overview">
            {(component===3) ? <Overview /> : null}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
