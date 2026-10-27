import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const items = ['HTML', 'CSS', 'JavaScript', 'React'];

  const pageStyle = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={pageStyle}>
      <h2>List of Items</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;