import './sass/main.scss';
import { useState } from 'react';

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
      <div className="container container__home">
        <main className="personal">
          <div className="content">
            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <button onClick={() => handleClick(1)}>One</button>
                  {(component===1) ? <h1>hehehehe</h1> : null}
                </li>
                <li className="navigation__item">
                  <button onClick={() => handleClick(2)}>Two</button>
                  {(component===2) ? <h1>hohohoho</h1> : null}
                </li>
                <li className="navigation__item">
                  <button onClick={() => handleClick(3)}>Three</button>
                  {(component===3) ? <h1>hihihihi</h1> : null}
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
