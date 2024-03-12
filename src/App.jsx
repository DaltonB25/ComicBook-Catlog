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
import SeriesDetail from './pages/SeriesDetail';
import ComicsList from './pages/ComicsList';
import AddCollection from './pages/AddCollection';
import BookDetails from './pages/BookDetails';
import CollectionDetails from './pages/CollectionDetails';



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
        <Route path='/series-details/:seriesId' element={<SeriesDetail />} />
        <Route path='/comics-list/:seriesId' element={<ComicsList />} />
        <Route path='/add-collection' element={<AddCollection />} />
        <Route path='/book-details/:comicId' element={<BookDetails />} />
        <Route path='/collection-details/:collectionId' element={<CollectionDetails />} />

      </Routes>
    </div>
  );
}
export default App;
