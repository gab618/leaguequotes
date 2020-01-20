import React, { useState } from 'react';
import './App.css';
import { quoteList } from './quoteList';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function App() {
   
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  function getRandomQuote(quoteList){
    let quoteObject = quoteList[Math.floor(Math.random() * quoteList.length)];
    setQuote(quoteObject.quote[Math.floor(Math.random() * quote.length)]);
    setAuthor(quoteObject.champion);
    return;
  }

  function refreshQuote(quoteList){
    setQuote('');
    return;
  }
  
  if(!quote){
    getRandomQuote(quoteList);
  }
 
  return (
    <div className="App" >
      <div className="LeftSide">
        <p className="Quote">
          {`"${quote}"`} - <span className="Author">{`${author}`}</span>
        </p>
      </div>
      <div className="RightSide">
        <a className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
            target="_blank"
            rel="noopener noreferrer"
        >
          Tweet
        </a>
        <NavigateNextIcon className="NextButton" onClick={refreshQuote}/>
      </div>
    </div>
  );
}

export default App;
