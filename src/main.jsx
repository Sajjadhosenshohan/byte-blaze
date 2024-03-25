import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import Blogs from './pages/Blogs';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bookmarks from './pages/Bookmarks';
import MainLayout from './Layouts/MainLayout';
import SingleBlog from './pages/SingleBlog';
import Content from './pages/Content';
import Author from './pages/Author';







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },

      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },

      
      {
        path: '/blog/:id',
        element: <SingleBlog></SingleBlog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index: true,
            element: <Content></Content>
          },
          {
            path:'author',
            element: <Author></Author>
          }
        ]

      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
