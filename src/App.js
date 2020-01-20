import React, { useState } from 'react';
import './App.css';
import { quoteList } from './quoteList';

function App() {
   
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  function getRandomQuote(quoteList){
    let quoteObject = quoteList[Math.floor(Math.random() * quoteList.length)];
    setQuote(quoteObject.quote[Math.floor(Math.random() * quote.length)]);
    setAuthor(quoteObject.champion);
    return;
  }

  if(!quote){
    getRandomQuote(quoteList);
  }
 
  return (
    <div className="App">
      <p className="Quote">
        {`"${quote}"`} - <span className="Author">{`${author}`}</span>
      </p>
      <a className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
      >
    Tweet</a>
    </div>
  );
}

export default App;
