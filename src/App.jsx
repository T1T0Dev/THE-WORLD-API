import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import { CatPage } from './pages/CatPage';
import { PokePage } from './pages/PokePage';
import { RickMortyPage } from './pages/RickMortyPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/poke' element={<PokePage />} />
          <Route path='/cat' element={<CatPage />} />
          <Route path='/rickmorty' element={<RickMortyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
