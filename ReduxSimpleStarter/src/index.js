import React from 'react';
import ReactDOM from 'react-dom';

// Step 1: Create a new component that produces some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Step 2: Take this components generated HTML and
//         put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
