import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className='App'>
      <h2>{people.length} birthday</h2>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear</button>
    </div>
  );
}

export default App;
