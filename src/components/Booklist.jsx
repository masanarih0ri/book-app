import React from 'react';

const Booklist = (props) => {
  // getData?とするとpropsの中にgetDataがある場合は実行されるようになる
  const apiResponse = props.getData?.(props.language);
  return (
    <div>
      <p>this is {apiResponse} list component</p>
    </div>
  );
};

export default Booklist;
