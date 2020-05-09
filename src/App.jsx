import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const getBookDataFromAPI = (keyword) => {
  return `${keyword} books`;
};

function App() {
  const languages = ['React', 'Vue', 'Angular'];
  return (
    // BrowserRouterが必要
    // exact path="/"は完全一致しているものだけを指定する。
    <BrowserRouter>
      <div className="App">
        <h1>book app</h1>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vue">Vue</Link>
          </li>
          <li>
            <Link to="/angular">Angular</Link>
          </li>
        </ul>
        {/* ここのlangage, getDataは子コンポーネントにデータなどを渡す際の名前 */}
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
