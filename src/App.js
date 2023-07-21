// App.js
import React from 'react';
import Login from './Login';
import ProtectedComponent from './ProtectedComponent';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Login />
      <ProtectedComponent />
    </div>
  );
};

export default App;
