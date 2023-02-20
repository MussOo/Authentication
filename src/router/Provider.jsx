import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Root from './routes/Root';
import Headers from './routes/Headers';
import Home from './routes/Home';

function Provider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Headers />
          <Root />
        </>
      ),
      children: [
        {
          path: '/home',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Provider;
