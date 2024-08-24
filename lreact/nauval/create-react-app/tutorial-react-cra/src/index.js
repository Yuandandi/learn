import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// This Is a Gateway File for All the File
// in this src/ Directory the place we will work on
// you can import css to this js file
// you import ./App which stands for ./App.js
// You will spread all the components to each file so the file text isn't huge and complicated
// we use import because we have 'export ' from that file
// reportWebVitals; test your app performance
// .gitignore will ignored by git so it won't pushed to the your repository

// package.JSON;
// dependencies
// script; available command you can run

// readme
// tutorial on How to use this create-react-app

// yarn.lock
// autogenereted file by yarn (don't edit this file manually)

// public directory
// all the static file we can access by the address bar

// react Using HMR (hot module refreshment) if the file changed It won't refresh the whole page, only on the changed DOM
// will be refreshed
