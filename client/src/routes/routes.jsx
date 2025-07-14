import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cities from '../components/Cities.jsx'; // <-- Make sure the path is correct
import App from '../App.jsx'; // Optional: A layout component with <Outlet />
import Home from '../components/Home.jsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />, 
    children: [
      { path: '', element: <Home /> },
      { path: 'cities', element: <Cities /> },
    ],
  },
]);

export default router;
