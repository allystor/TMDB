import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Search from './pages/Search';
import Home from './pages/Home';
import Movie from './pages/Movie';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);