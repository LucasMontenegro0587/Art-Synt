import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/hands-logo.png'; // Asegúrate de tener el logo en la carpeta images

function App() {
  return (
    <div>
      {/* Header con Logo y Bienvenida */}
      <header className="d-flex justify-content-between align-items-center py-3">
        <img src={logo} alt="Logo de la tienda" className="cyberpunk-logo" />
        <h1 className="text-neon">Art-Synt</h1>
      </header>
      {/* Componente Navbar */}
      <Navbar />
      <p className="text-neon">Explora lo último en tecnología y estilo Cyberpunk. Productos únicos a un clic de distancia</p>
      {/* Contenedor de bienvenida */}
      <main className="text-center mt-4">
        <ItemListContainer greetings="Bienvenidos" texto="primer-prop" />
      </main>
    </div>
  );
}

export default App;
