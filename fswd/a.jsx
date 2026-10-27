import React from 'react';

function App() {
  const a = 10;
  const b = 20;

  return (
    <div>
      <h2>Name: Kovidh</h2>
      <p>Today's Date: {new Date().toLocaleDateString()}</p>
      <p>Sum: {a + b}</p>
    </div>
  );
}

export default App;