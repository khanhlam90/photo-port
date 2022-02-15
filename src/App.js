import React from 'react';
import About from './components/About';

function App() {
  return (
    // This is note
    // React.createElement("div", {}, [
    // React.createElement("h1", {}, "Ginger"),
    // React.createElement("p", {}, "bread: Brittany Spaniel")
    // ])
    // the above is same as
    // <div>
      // <h1>Ginger</h1>
      // <p>breed: Brittany Spaniel</p>
      // </div>
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
