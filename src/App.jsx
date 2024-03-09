// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/AboutPage';
import ComicsPage from './pages/ComicsPage';
import ViewCollectionPage from './pages/ViewCollectionPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Comics' element={<ComicsPage />} />
        <Route path='/Collection' element={<ViewCollectionPage />} />
      </Routes>
    </div>
  );
}
export default App;
