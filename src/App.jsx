import React from 'react';
import Booklist from './components/Booklist';
import Stocklist from './components/Stocklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const languages = ['React', 'Vue', 'Angular'];
  const getBookDataFromAPI = async (keyword) => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };
  const getStocksDataFromStein = async () => {
    const stockRequestUrl =
      'https://api.steinhq.com/v1/storages/5e2ff4245a823204986f3ae8/stocksData';
    const srockDataResult = await axios.get(stockRequestUrl);
    return srockDataResult;
  };
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
          <li>
            <Link to="/stocks">Stocks</Link>
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
        <Route
          path="/stocks"
          render={(props) => (
            <Stocklist getStockData={() => getStocksDataFromStein()} />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
