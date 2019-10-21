import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelect('#root'));
