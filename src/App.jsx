import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Contact }  from './components/Contact';
import { Home } from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Componente Navbar */}
        <Routes>
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
