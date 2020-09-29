import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [message ] = useState('Welcome!');

  useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setData(data.message))
    .catch(err => console.log('Oh noes!', err))
    .finally(() => setIsLoading(false))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        {
          isLoading
            ? <p>Loading...</p>
            : <img src={data} alt="A random dog" />
        }
      </header>
    </div>
  );
}

export default App;
