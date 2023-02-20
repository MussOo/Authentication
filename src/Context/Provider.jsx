import React, { useState, useEffect } from 'react';
import Provider from '../router/Provider';
import UserContext from './index';
import Login from '../components/Auth';
import Header from '../components/Header';

function provider() {
  useEffect(() => {
    fetch('http://localhost:3000/me', {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      'Set-Cookie': 'HttpOnly;Secure;SameSite=None',
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function logout() {
    fetch('http://localhost:3000/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.reload();
      })
      .catch((error) => console.log(error));
    // .then(() => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('userId');
    // });
  }

  if (!localStorage.getItem('token')) {
    return (
      <div className='Outlet'>
        <Login />
      </div>
    );
  }
  let userData = { token: localStorage.getItem('token'), userId: localStorage.getItem('userId') };
  return (
    <UserContext.Provider value={{ userData, logout }}>
      <Provider />
    </UserContext.Provider>
  );
}

export default provider;
