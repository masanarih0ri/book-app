import React from 'react';
import Booklist from './components/Booklist';
import Stocklist from './components/Stocklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from './images/logo.png';
import './css/App.css';

function App() {
  const languages = ['React', 'Vue', 'Angular'];
  const getBookDataFromAPI = async (keyword) => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header-content">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link to="/">React</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/vue">Vue</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/angular">Angular</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route
          exact
          path="/"
          render={(props) => (
            <Booklist
              language={languages[0]}
              getData={(keyword) => getBookDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          path="/vue"
          render={(props) => (
            <Booklist
              language={languages[1]}
              getData={(keyword) => getBookDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          path="/angular"
          render={(props) => (
            <Booklist
              language={languages[2]}
              getData={(keyword) => getBookDataFromAPI(keyword)}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
