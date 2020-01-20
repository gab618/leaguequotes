import React, { useState } from 'react';
import './App.css';
import { quoteList } from './quoteList';

function App() {
   
  const [quote, setQuote] = useState('');
  function getRandomQuote(quoteList){
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
    return quote;
  }

  if(!quote){
    getRandomQuote(quoteList);
  }
 
  return (
    <div className="App">
      <p className="Quote">
        {`"${quote.quote}"`} - <span className="Author">{`${quote.author}`}</span>
      </p>
      <a className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text="${quote.quote}" - ${quote.author}`}
          target="_blank"
      >
    Tweet</a>
    </div>
  );
}

export default App;
