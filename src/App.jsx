// App.jsx

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
