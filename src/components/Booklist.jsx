import React, { useState, useEffect } from 'react';

const Booklist = (props) => {
  // bookDataはデータを保管しておくための変数、setBookDataは値を更新（セット）するための関数
  //useStateを使ってbookDataの初期値をセット。今回はnullが初期値である
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    // getData?とするとpropsの中にgetDataがある場合は実行されるようになる
    const result = props.getData?.(props.language).then(
      (response) => {
        setBookData(response);
      },
      [props]
    );
  });
  return (
    <div>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((data, index) => {
          if (data.volumeInfo.imageLinks) {
            return (
              <li key={index}>
                <div>{data.volumeInfo.title}</div>
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  alt={data.volumeInfo.title}
                />
              </li>
            );
          }
          return (
            <li key={index}>
              <div>{data.volumeInfo.title}</div>
            </li>
          );
        })
      )}
    </div>
  );
};

export default Booklist;
