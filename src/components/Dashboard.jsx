import React from 'react';
import UserContext from '../Context';
function Dashboard() {
  const { logout } = React.useContext(UserContext);

  return (
    <div className='Dashboard'>
      <button
        onClick={() => {
          logout();
        }}
        className='btn-logout'
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
