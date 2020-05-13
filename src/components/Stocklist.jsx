import React, { useState, useEffect } from 'react';

const Stocklist = (props) => {
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    const result = props.getStockData?.().then(
      (response) => {
        setStockData(response);
      },
      [props]
    );
  });
  return (
    <div>
      {stockData === null ? (
        <p>now loading...</p>
      ) : (
        stockData.data.map((data, index) => {
          return (
            <ul>
              <li key={index}>
                <span>{data.ticker}</span>
                <span>{data.currentStockPrice}</span>
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default Stocklist;
