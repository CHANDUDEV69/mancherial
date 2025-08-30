import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cities from '../components/Cities.jsx'; // <-- Make sure the path is correct
import App from '../App.jsx'; // Optional: A layout component with <Outlet />
import Home from '../components/Home.jsx';
import BlogOne from "../components/blogs/BlogOne.jsx";
import BlogTwo from "../components/blogs/BlogTwo.jsx";
import BlogThree from "../components/blogs/BlogThree.jsx";

const router = createBrowserRouter([
  {
    path: '',
    element: <App />, 
    children: [
      { path: '', element: <Home /> },
      { path: 'cities', element: <Cities /> },
      { path: '1', element: <BlogOne /> },
      { path: '2', element: <BlogTwo /> },
      { path: '3', element: <BlogThree /> },
    ],
  },
]);

export default router;
