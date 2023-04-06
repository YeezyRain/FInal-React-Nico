import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

<RouterProvider router={router} />

ReactDOM.render( < App/> , document.getElementById('root'));
