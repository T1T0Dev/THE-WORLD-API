import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CatPage } from './pages/CatPage';
import { PokePage } from './pages/PokePage';
import { RickMortyPage } from './pages/RickMortyPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppContent() {
  // useLocation es un hook que nos permite acceder a la ubicación actual de la aplicación
  // y así poder cambiar el fondo de la página según la ruta actual

  const location = useLocation();

  let backgroundClass = '';
  if (location.pathname === '/') {
    backgroundClass = 'background-home';
  } else if (location.pathname === '/poke') {
    backgroundClass = 'background-pokemon';
  } else if (location.pathname === '/cat') {
    backgroundClass = 'background-gatos';
  } else if (location.pathname === '/rickmorty') {
    backgroundClass = 'background-rick';
  }

  return (

    // Aquí se define el fondo de la página según la ruta actual
    // y se renderiza el componente Navbar y las rutas de la aplicación.
    <div className={backgroundClass}>

      <Navbar currentPath={location.pathname} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/poke' element={<PokePage />} />
        <Route path='/cat' element={<CatPage />} />
        <Route path='/rickmorty' element={<RickMortyPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
