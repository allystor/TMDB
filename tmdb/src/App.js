import { Outlet } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>TMDB</h1>
      <Outlet/>
    </div>
  );
}

export default App;
