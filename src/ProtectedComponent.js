// ProtectedComponent.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProtectedComponent = () => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <div>You need to login to access this component.</div>;
  }

  // Make authenticated API calls using the token

  return (
    <div>
      <h2>Protected Component</h2>
      {/* Rest of the component */}
    </div>
  );
};

export default ProtectedComponent;
