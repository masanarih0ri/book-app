import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
        {/* ここのlangageは子コンポーネントに渡す際の名前 */}
        <Route
          exact
          path="/"
          render={(props) => <Booklist language={languages[0]} />}
        />
        <Route
          path="/vue"
          render={(props) => <Booklist language={languages[1]} />}
        />
        <Route
          path="/angular"
          render={(props) => <Booklist language={languages[2]} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
