import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBHzuM9gK1hWfDajGmijwht0Sa0T0oLUxg';


// Step 1: Create a new component that produces some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
);
}

// Step 2: Take this components generated HTML and
//         put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
