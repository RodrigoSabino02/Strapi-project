import React, { useEffect, useState } from 'react';



function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/games')
    .then(response => response.json())
    .then(data => setGames(data));
  }, [])

  console.log(games)


  return (
    <div className="App">
      <ul>
        {games.map(games => (
          <li key={games.id}>
            <h2>{games.title}</h2>
            <p>{games.description}</p>
            <span>{games.platform}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
